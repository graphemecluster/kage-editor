import { GlyphLine } from './glyph';

export type StretchParam = [number, number, number, number];
export type StretchPositions = [number, number, number, number];

export const getStretchPositions = (glyphLine: GlyphLine): StretchPositions | null => {
  if (glyphLine.value[0] !== 99) {
    return null;
  }
  const sx = glyphLine.value[9];
  const sy = glyphLine.value[10];
  const tx = glyphLine.value[3];
  const ty = glyphLine.value[4];
  return [sx, sy, tx, ty];
};

export const setStretchPositions = (glyphLine: GlyphLine, positions: StretchPositions): GlyphLine => {
  if (glyphLine.value[0] !== 99) {
    return glyphLine;
  }
  const [sx, sy, tx, ty] = positions;

  const newValue = glyphLine.value.slice();
  newValue[9] = sx;
  newValue[10] = sy;
  newValue[3] = tx;
  newValue[4] = ty;
  return { value: newValue, partName: glyphLine.partName };
};

export const normalizeStretchPositions = (positions: StretchPositions): StretchPositions => {
  let [sx, sy, tx, ty] = positions;
  if (tx <= 100) {
    tx += 200;
    sx = sy = 0;
  }
  return [sx, sy, tx, ty];
};

export const calcStretchPositions = (param: StretchParam, k: number): StretchPositions => {
  const [x0, y0, x1, y1] = param;
  return [
    x0 - 100,
    y0 - 100,
    x0 + (x1 - x0) * k / 20 + 100,
    y0 + (y1 - y0) * k / 20 - 100,
  ];
};

const clampStretchScalar = (k: number): number => Math.max(-10, Math.min(10, k));

export const calcStretchScalar = (param: StretchParam, positions: StretchPositions): number => {
  const [x0, y0, x1, y1] = param;
  if (x0 === x1 && y0 === y1) {
    return 0;
  }
  const [sx, sy, tx, ty] = normalizeStretchPositions(positions);
  if (sx === tx - 200 && sy === ty) {
    return 0;
  }
  return clampStretchScalar(Math.round(
    Math.abs(x0 - x1) > Math.abs(y0 - y1)
      ? (tx - 100 - x0) / (x1 - x0) * 20
      : (ty + 100 - y0) / (y1 - y0) * 20
  )) || 0;
}
