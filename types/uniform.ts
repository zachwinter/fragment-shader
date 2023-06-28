export type UniformType = 0 | 1 | 2 | 3;
export type FloatUniformValue = [number, number, number, number];
export type FloatUniform = [string, 0, FloatUniformValue];
export type PackedFloatUniform = [string, 0, FloatUniformValue[]];
export type BooleanUniformValue = boolean;
export type BooleanUniform = [string, 1, BooleanUniformValue];
export type PackedBooleanUniform = [string, 0, BooleanUniformValue[]];
export type Vec2UniformValue = [number, number];
export type Vec2Uniform = [string, 2, Vec2UniformValue];
export type PackedVec2Uniform = [string, 2, Vec2UniformValue[]];
export type Vec3UniformValue = [number, number, number];
export type Vec3Uniform = [string, 3, Vec3UniformValue];
export type PackedVec3Uniform = [string, 3, Vec3UniformValue[]];
export type Uniform = FloatUniform | BooleanUniform | Vec2Uniform | Vec3Uniform;
export type PackedUniform =
  | PackedFloatUniform
  | PackedBooleanUniform
  | PackedVec2Uniform
  | PackedVec3Uniform;
