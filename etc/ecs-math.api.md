## API Report File for "@dcl/ecs-math"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// @public
export type Color3 = Color3.ReadonlyColor3;

// @public
export namespace Color3 {
    export function add(value: ReadonlyColor3, otherColor: ReadonlyColor3): MutableColor3;
    export function addToRef(value: ReadonlyColor3, otherColor: ReadonlyColor3, result: MutableColor3): void;
    export function asArray(value: ReadonlyColor3): number[];
    export function Black(): MutableColor3;
    export function Blue(): MutableColor3;
    export function clamp(value: ReadonlyColor3, min?: number, max?: number): MutableColor3;
    export function clampToRef(value: ReadonlyColor3, min: number | undefined, max: number | undefined, result: MutableColor3): void;
    export function clone(value: ReadonlyColor3): MutableColor3;
    export function copyFrom(source: ReadonlyColor3, dest: MutableColor3): void;
    export function create(
    r?: number,
    g?: number,
    b?: number): {
        r: number;
        g: number;
        b: number;
    };
    export function equals(value: ReadonlyColor3, otherColor: ReadonlyColor3): boolean;
    export function equalsFloats(value: ReadonlyColor3, r: number, g: number, b: number): boolean;
    export function fromArray(array: ArrayLike<number>, offset?: number): MutableColor3;
    export function fromHexString(hex: string): MutableColor3;
    export function fromInts(r: number, g: number, b: number): MutableColor3;
    export function getHashCode(value: ReadonlyColor3): number;
    export function Gray(): MutableColor3;
    export function Green(): MutableColor3;
    export function lerp(start: ReadonlyColor3, end: ReadonlyColor3, amount: number): MutableColor3;
    export function lerpToRef(left: ReadonlyColor3, right: ReadonlyColor3, amount: number, result: MutableColor3): void;
    export function Magenta(): MutableColor3;
    export function multiply(value: ReadonlyColor3, otherColor: ReadonlyColor3): MutableColor3;
    export function multiplyToRef(value: ReadonlyColor3, otherColor: ReadonlyColor3, result: MutableColor3): void;
    export type Mutable = MutableColor3;
    export type MutableColor3 = {
        r: number;
        g: number;
        b: number;
    };
    export function Purple(): MutableColor3;
    export function Random(): MutableColor3;
    export type ReadonlyColor3 = {
        readonly r: number;
        readonly g: number;
        readonly b: number;
    };
    export function Red(): MutableColor3;
    export function scale(value: ReadonlyColor3, scale: number): MutableColor3;
    export function scaleAndAddToRef(value: ReadonlyColor3, scale: number, result: MutableColor3): void;
    export function scaleToRef(value: ReadonlyColor3, scale: number, result: MutableColor3): void;
    export function set(dest: MutableColor3, r: number, g: number, b: number): void;
    export function subtract(value: ReadonlyColor3, otherColor: ReadonlyColor3): MutableColor3;
    export function subtractToRef(value: ReadonlyColor3, otherColor: ReadonlyColor3, result: MutableColor3): void;
    export function Teal(): MutableColor3;
    export function toArray(value: ReadonlyColor3, array: FloatArray, index?: number): void;
    export function toColor4(value: ReadonlyColor3, alpha?: number): Color4.MutableColor4;
    export function toGammaSpace(value: ReadonlyColor3): ReadonlyColor3;
    export function toGammaSpaceToRef(value: ReadonlyColor3, convertedColor: MutableColor3): void;
    export function toHexString(value: ReadonlyColor3): string;
    export function toLinearSpace(value: ReadonlyColor3): MutableColor3;
    export function toLinearSpaceToRef(value: ReadonlyColor3, convertedColor: MutableColor3): void;
    export function toLuminance(value: ReadonlyColor3): number;
    export function toString(value: ReadonlyColor3): string;
    export function White(): MutableColor3;
    export function Yellow(): MutableColor3;
}

// @public
export type Color4 = Color4.ReadonlyColor4;

// @public
export namespace Color4 {
    export function add(value: ReadonlyColor4, right: ReadonlyColor4): MutableColor4;
    export function addToRef(a: ReadonlyColor4, b: ReadonlyColor4, ref: MutableColor4): void;
    export function Black(): MutableColor4;
    export function Blue(): MutableColor4;
    export function checkColors4(colors: number[], count: number): number[];
    export function clampToRef(value: ReadonlyColor4, min: number | undefined, max: number | undefined, result: MutableColor4): void;
    export function Clear(): MutableColor4;
    export function clone(value: ReadonlyColor4): MutableColor4;
    export function copyFrom(source: ReadonlyColor4, dest: MutableColor4): void;
    export function copyFromFloats(r: number, g: number, b: number, a: number, dest: MutableColor4): void;
    export function create(
    r?: number,
    g?: number,
    b?: number,
    a?: number): MutableColor4;
    export function fromArray(array: ArrayLike<number>, offset?: number): ReadonlyColor4;
    export function fromColor3(color3: Color3.ReadonlyColor3, alpha?: number): MutableColor4;
    export function fromHexString(hex: string): MutableColor4;
    export function fromInts(r: number, g: number, b: number, a: number): MutableColor4;
    export function getHashCode(value: ReadonlyColor4): number;
    export function Gray(): MutableColor4;
    export function Green(): MutableColor4;
    export function lerp(left: ReadonlyColor4, right: ReadonlyColor4, amount: number): MutableColor4;
    export function lerpToRef(left: ReadonlyColor4, right: ReadonlyColor4, amount: number, result: MutableColor4): void;
    export function Magenta(): MutableColor4;
    export function multiply(value: ReadonlyColor4, color: ReadonlyColor4): ReadonlyColor4;
    export function multiplyToRef(value: ReadonlyColor4, color: ReadonlyColor4, result: MutableColor4): void;
    export type Mutable = MutableColor4;
    export type MutableColor4 = {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    export function Purple(): MutableColor4;
    export type ReadonlyColor4 = {
        readonly r: number;
        readonly g: number;
        readonly b: number;
        readonly a: number;
    };
    export function Red(): MutableColor4;
    export function scale(value: ReadonlyColor4, scale: number): ReadonlyColor4;
    export function scaleAndAddToRef(value: ReadonlyColor4, scale: number, result: MutableColor4): void;
    export function scaleToRef(value: ReadonlyColor4, scale: number, result: MutableColor4): void;
    export function set(r: number, g: number, b: number, a: number, dest: MutableColor4): void;
    export function subtract(value: ReadonlyColor4, right: ReadonlyColor4): ReadonlyColor4;
    export function subtractToRef(a: ReadonlyColor4, b: ReadonlyColor4, result: MutableColor4): void;
    export function Teal(): MutableColor4;
    export function toArray(value: ReadonlyColor4, array: number[], index?: number): void;
    export function toGammaSpace(value: ReadonlyColor4): ReadonlyColor4;
    export function toGammaSpaceToRef(value: ReadonlyColor4, convertedColor: MutableColor4): void;
    export function toHexString(value: ReadonlyColor4): string;
    export function toLinearSpace(value: ReadonlyColor4): MutableColor4;
    export function toLinearSpaceToRef(value: ReadonlyColor4, ref: MutableColor4): void;
    export function toString(value: ReadonlyColor4): string;
    export function White(): MutableColor4;
    export function Yellow(): MutableColor4;
}

// @public
export const DEG2RAD: number;

// @public
export const Epsilon = 0.000001;

// @public (undocumented)
export type FloatArray = number[];

// @public
export type Quaternion = Quaternion.ReadonlyQuaternion;

// @public
export namespace Quaternion {
    export function add(q1: ReadonlyQuaternion, q2: ReadonlyQuaternion): MutableQuaternion;
    export function angle(quat1: ReadonlyQuaternion, quat2: ReadonlyQuaternion): number;
    export function create(
    x?: number,
    y?: number,
    z?: number,
    w?: number): MutableQuaternion;
    export function dot(left: ReadonlyQuaternion, right: ReadonlyQuaternion): number;
    // (undocumented)
    export function fromAngleAxis(degrees: number, axis: Vector3.ReadonlyVector3): MutableQuaternion;
    export function fromAxisToRotationQuaternion(axis1: Vector3.ReadonlyVector3, axis2: Vector3.ReadonlyVector3, axis3: Vector3.ReadonlyVector3): MutableQuaternion;
    export function fromAxisToRotationQuaternionToRef(axis1: Vector3.ReadonlyVector3, axis2: Vector3.ReadonlyVector3, axis3: Vector3.ReadonlyVector3, ref: MutableQuaternion): void;
    export function fromEulerDegrees(x: number, y: number, z: number): MutableQuaternion;
    export function fromLookAt(position: Vector3.ReadonlyVector3, target: Vector3.ReadonlyVector3, worldUp?: Vector3.ReadonlyVector3): MutableQuaternion;
    export function fromLookAtToRef(position: Vector3.ReadonlyVector3, target: Vector3.ReadonlyVector3, worldUp: Vector3.ReadonlyVector3 | undefined, result: MutableQuaternion): void;
    // Warning: (ae-forgotten-export) The symbol "Matrix" needs to be exported by the entry point index.d.ts
    export function fromRotationMatrixToRef(matrix: Matrix.ReadonlyMatrix, result: Quaternion.MutableQuaternion): void;
    export function fromRotationYawPitchRoll(yaw: number, pitch: number, roll: number): MutableQuaternion;
    export function fromRotationYawPitchRollToRef(yaw: number, pitch: number, roll: number, result: Quaternion.MutableQuaternion): void;
    export function fromToRotation(from: Vector3.ReadonlyVector3, to: Vector3.ReadonlyVector3, up?: Vector3.ReadonlyVector3): MutableQuaternion;
    export function Identity(): MutableQuaternion;
    export function length(q: ReadonlyQuaternion): number;
    export function lengthSquared(q: ReadonlyQuaternion): number;
    export function lookRotation(forward: Vector3.ReadonlyVector3, up?: Vector3.ReadonlyVector3): MutableQuaternion;
    export function multiply(self: ReadonlyQuaternion, q1: ReadonlyQuaternion): MutableQuaternion;
    export function multiplyToRef(self: ReadonlyQuaternion, q1: ReadonlyQuaternion, result: MutableQuaternion): void;
    export type Mutable = MutableQuaternion;
    export type MutableQuaternion = {
        x: number;
        y: number;
        z: number;
        w: number;
    };
    export function normalize(q: ReadonlyQuaternion): MutableQuaternion;
    export type ReadonlyQuaternion = {
        readonly x: number;
        readonly y: number;
        readonly z: number;
        readonly w: number;
    };
    export function rotateTowards(from: ReadonlyQuaternion, to: ReadonlyQuaternion, maxDegreesDelta: number): MutableQuaternion;
    export function slerp(left: ReadonlyQuaternion, right: ReadonlyQuaternion, amount: number): MutableQuaternion;
    export function slerpToRef(left: ReadonlyQuaternion, right: ReadonlyQuaternion, amount: number, result: MutableQuaternion): void;
    export function toEulerAngles(q: MutableQuaternion): Vector3.Mutable;
    export function Zero(): MutableQuaternion;
}

// @public
export const RAD2DEG: number;

// @public
export namespace Scalar {
    const TwoPi: number;
    export function clamp(value: number, min?: number, max?: number): number;
    export function deltaAngle(current: number, target: number): number;
    export function denormalize(normalized: number, min: number, max: number): number;
    export function hermite(value1: number, tangent1: number, value2: number, tangent2: number, amount: number): number;
    export function inverseLerp(a: number, b: number, value: number): number;
    export function lerp(start: number, end: number, amount: number): number;
    export function lerpAngle(start: number, end: number, amount: number): number;
    export function log2(value: number): number;
    export function moveTowards(current: number, target: number, maxDelta: number): number;
    export function moveTowardsAngle(current: number, target: number, maxDelta: number): number;
    export function normalize(value: number, min: number, max: number): number;
    export function normalizeRadians(angle: number): number;
    export function percentToRange(percent: number, min: number, max: number): number;
    export function pingPong(tx: number, length: number): number;
    export function randomRange(min: number, max: number): number;
    export function rangeToPercent(num: number, min: number, max: number): number;
    export function repeat(value: number, length: number): number;
    export function sign(value: number): number;
    export function smoothStep(from: number, to: number, tx: number): number;
    export function toHex(i: number): string;
    export function withinEpsilon(a: number, b: number, epsilon?: number): boolean;
}

// @public
export const ToGammaSpace: number;

// @public
export const ToLinearSpace = 2.2;

// @public
export type Vector2 = Vector2.ReadonlyVector2;

// @public
export namespace Vector2 {
    export function create(
    x?: number,
    y?: number): MutableVector2;
    export type Mutable = MutableVector2;
    export type MutableVector2 = {
        x: number;
        y: number;
    };
    export function One(): MutableVector2;
    export type ReadonlyVector2 = {
        readonly x: number;
        readonly y: number;
    };
    export function Zero(): MutableVector2;
}

// @public
export type Vector3 = Vector3.ReadonlyVector3;

// @public
export namespace Vector3 {
    export function add(vector1: ReadonlyVector3, vector2: ReadonlyVector3): MutableVector3;
    export function addToRef(vectorA: ReadonlyVector3, vectorB: ReadonlyVector3, result: MutableVector3): void;
    export function applyMatrix4(vector: ReadonlyVector3, matrix: Matrix.ReadonlyMatrix): MutableVector3;
    export function applyMatrix4ToRef(vector: ReadonlyVector3, matrix: Matrix.ReadonlyMatrix, result: MutableVector3): void;
    export function Backward(): MutableVector3;
    export function catmullRom(value1: ReadonlyVector3, value2: ReadonlyVector3, value3: ReadonlyVector3, value4: ReadonlyVector3, amount: number): MutableVector3;
    export function center(value1: ReadonlyVector3, value2: ReadonlyVector3): MutableVector3;
    export function clamp(value: ReadonlyVector3, min: ReadonlyVector3, max: ReadonlyVector3): MutableVector3;
    export function clampToRef(value: ReadonlyVector3, min: ReadonlyVector3, max: ReadonlyVector3, result: MutableVector3): void;
    export function clone(source: ReadonlyVector3): MutableVector3;
    export function copyFrom(source: ReadonlyVector3, dest: MutableVector3): void;
    export function copyFromFloats(x: number, y: number, z: number, dest: MutableVector3): void;
    export function create(
    x?: number,
    y?: number,
    z?: number): MutableVector3;
    export function cross(left: ReadonlyVector3, right: ReadonlyVector3): MutableVector3;
    export function crossToRef(left: ReadonlyVector3, right: ReadonlyVector3, result: MutableVector3): void;
    export function distance(value1: ReadonlyVector3, value2: ReadonlyVector3): number;
    export function distanceSquared(value1: ReadonlyVector3, value2: ReadonlyVector3): number;
    export function divide(vector1: ReadonlyVector3, vector2: ReadonlyVector3): MutableVector3;
    export function divideToRef(vector1: ReadonlyVector3, vector2: ReadonlyVector3, result: MutableVector3): void;
    export function dot(left: ReadonlyVector3, right: ReadonlyVector3): number;
    export function Down(): MutableVector3;
    export function equals(vector1: ReadonlyVector3, vector2: ReadonlyVector3): boolean;
    export function equalsToFloats(vector: ReadonlyVector3, x: number, y: number, z: number): boolean;
    export function equalsWithEpsilon(vector1: ReadonlyVector3, vector2: ReadonlyVector3, epsilon?: number): boolean;
    export function floor(vector1: ReadonlyVector3): MutableVector3;
    export function Forward(): MutableVector3;
    export function fract(vector1: ReadonlyVector3): MutableVector3;
    export function fromArray(array: FloatArray, offset?: number): MutableVector3;
    export function fromArrayToRef(array: number[], offset: number, result: MutableVector3): void;
    export function fromFloatArray(array: FloatArray, offset?: number): MutableVector3;
    export function fromFloatArrayToRef(array: FloatArray, offset: number, result: MutableVector3): void;
    export function getAngleBetweenVectors(vector0: ReadonlyVector3, vector1: ReadonlyVector3, normal: ReadonlyVector3): number;
    export function getClipFactor(vector0: ReadonlyVector3, vector1: ReadonlyVector3, axis: ReadonlyVector3, size: number): number;
    export function getHashCode(vector: ReadonlyVector3): number;
    export function hermite(value1: ReadonlyVector3, tangent1: ReadonlyVector3, value2: ReadonlyVector3, tangent2: ReadonlyVector3, amount: number): MutableVector3;
    export function isNonUniform(vector: ReadonlyVector3): boolean;
    export function Left(): MutableVector3;
    export function length(vector: ReadonlyVector3): number;
    export function lengthSquared(vector: ReadonlyVector3): number;
    export function lerp(start: ReadonlyVector3, end: ReadonlyVector3, amount: number): MutableVector3;
    export function lerpToRef(start: ReadonlyVector3, end: ReadonlyVector3, amount: number, result: MutableVector3): void;
    export function maximize(left: MutableVector3, right: MutableVector3): MutableVector3;
    export function maximizeInPlaceFromFloatsToRef(vector1: ReadonlyVector3, x: number, y: number, z: number, result: MutableVector3): void;
    export function minimize(left: ReadonlyVector3, right: ReadonlyVector3): MutableVector3;
    export function minimizeInPlaceFromFloatsToRef(vector1: ReadonlyVector3, x: number, y: number, z: number, result: MutableVector3): void;
    export function multiply(vector1: ReadonlyVector3, vector2: ReadonlyVector3): MutableVector3;
    export function multiplyByFloats(vector1: ReadonlyVector3, x: number, y: number, z: number): MutableVector3;
    export function multiplyByFloatsToRef(vector1: ReadonlyVector3, x: number, y: number, z: number, result: MutableVector3): void;
    export function multiplyToRef(vector1: ReadonlyVector3, vector2: ReadonlyVector3, result: MutableVector3): void;
    export type Mutable = MutableVector3;
    export type MutableVector3 = {
        x: number;
        y: number;
        z: number;
    };
    export function negate(value: ReadonlyVector3): MutableVector3;
    export function normalize(vector: ReadonlyVector3): MutableVector3;
    export function normalizeFromLength(vector: ReadonlyVector3, len: number): MutableVector3;
    export function normalizeFromLengthToRef(vector: ReadonlyVector3, len: number, result: MutableVector3): void;
    export function normalizeToRef(vector: ReadonlyVector3, result: MutableVector3): void;
    export function One(): MutableVector3;
    export function Random(): MutableVector3;
    export type ReadonlyVector3 = {
        readonly x: number;
        readonly y: number;
        readonly z: number;
    };
    export function Right(): MutableVector3;
    export function rotate(vector: ReadonlyVector3, q: Quaternion.ReadonlyQuaternion): MutableVector3;
    export function rotateToRef(vector: ReadonlyVector3, q: Quaternion.ReadonlyQuaternion, result: MutableVector3): void;
    export function rotationFromAxis(axis1: MutableVector3, axis2: MutableVector3, axis3: MutableVector3): MutableVector3;
    export function rotationFromAxisToRef(axis1: MutableVector3, axis2: MutableVector3, axis3: MutableVector3, result: MutableVector3): void;
    export function scale(vector: ReadonlyVector3, scale: number): MutableVector3;
    export function scaleToRef(vector: ReadonlyVector3, scale: number, result: MutableVector3): void;
    export function subtract(vector1: ReadonlyVector3, vector2: ReadonlyVector3): MutableVector3;
    export function subtractFromFloatsToRef(vector1: ReadonlyVector3, x: number, y: number, z: number, result: MutableVector3): void;
    export function subtractToRef(vectorA: ReadonlyVector3, vectorB: ReadonlyVector3, result: MutableVector3): void;
    export function toString(vector: ReadonlyVector3): string;
    export function transformCoordinates(vector: ReadonlyVector3, transformation: Matrix.ReadonlyMatrix): MutableVector3;
    export function transformCoordinatesFromFloatsToRef(x: number, y: number, z: number, transformation: Matrix.ReadonlyMatrix, result: MutableVector3): void;
    export function transformCoordinatesToRef(vector: ReadonlyVector3, transformation: Matrix.ReadonlyMatrix, result: MutableVector3): void;
    export function transformNormal(vector: ReadonlyVector3, transformation: Matrix.ReadonlyMatrix): MutableVector3;
    export function transformNormalFromFloatsToRef(x: number, y: number, z: number, transformation: Matrix.ReadonlyMatrix, result: MutableVector3): void;
    export function transformNormalToRef(vector: ReadonlyVector3, transformation: Matrix.ReadonlyMatrix, result: MutableVector3): void;
    export function Up(): MutableVector3;
    export function Zero(): MutableVector3;
}

// (No @packageDocumentation comment for this package)

```
