
export type CountDownType = '' | 'start' | 'running' | 'finished' | 'off';

export type setStateCountDownType = (
  value: CountDownType | ((prevState: CountDownType) => CountDownType),
) => void;