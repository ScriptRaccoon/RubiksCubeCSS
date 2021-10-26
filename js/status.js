export const STATUS = {
    IDLE: 1,
    ROTATING: 2,
    SOLVEANIMATION: 3,
    SCRAMBLING: 4,
    RESETTING: 5,
};

export let currentStatus = STATUS.IDLE;

export function setStatus(status) {
    currentStatus = status;
}
