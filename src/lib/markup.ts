// Tiny inline-emphasis markup for site copy:
//   «text»  -> green-underline highlight (interactive)
//   ‹text›  -> accent-colored bold emphasis
export type Mark = { t: 'text' | 'hl' | 'acc'; v: string };

export function parseMarks(s: string): Mark[] {
  const out: Mark[] = [];
  const re = /«([^»]*)»|‹([^›]*)›/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(s))) {
    if (m.index > last) out.push({ t: 'text', v: s.slice(last, m.index) });
    if (m[1] !== undefined) out.push({ t: 'hl', v: m[1] });
    else out.push({ t: 'acc', v: m[2] ?? '' });
    last = m.index + m[0].length;
  }
  if (last < s.length) out.push({ t: 'text', v: s.slice(last) });
  return out;
}
