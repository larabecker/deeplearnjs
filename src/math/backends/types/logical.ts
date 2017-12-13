import {NDArray} from '../../ndarray';
// tslint:disable-next-line:max-line-length
import {KernelInputArrays, KernelInputConfig, KernelNode} from '../kernel_config';

export interface EqualNode extends KernelNode {
  inputAndArgs: EqualInputConfig;
  output: NDArray<'bool'>;
  gradient: (dy: NDArray<'bool'>, y: NDArray<'bool'>) => EqualInputArrays;
}

export interface EqualInputConfig extends KernelInputConfig {
  inputs: EqualInputArrays;
}

export interface EqualInputArrays extends KernelInputArrays {
  a: NDArray;
  b: NDArray;
}
