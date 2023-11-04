export const UseGoToDestination = () => {
    const goToDestination = (workerId: string, targetId: string) => {
        const target = document.getElementById(targetId) as HTMLDivElement;
        const worker = document.getElementById(workerId) as HTMLDivElement;
        const targetPosition = target.getBoundingClientRect();
        const workerPosition = worker.getBoundingClientRect();
        const walkSpeed = 2.6;
        let workerCurrentPositionNumber = worker.getBoundingClientRect().left;
        let moveDirection = '';

        function moveWorker() {
            if (workerPosition.left < targetPosition.left) {
                moveDirection = 'right';
                workerCurrentPositionNumber += walkSpeed;
            } else {
                moveDirection = 'left';
                workerCurrentPositionNumber -= walkSpeed;
            }
            if (!workerArrivedAtTargetLocation()) {
                worker.style.left = `${workerCurrentPositionNumber}px`;
                requestAnimationFrame(moveWorker);
            } else {
                console.log("Worker has arrived at the target.");
            }
        }

        const workerArrivedAtTargetLocation = () => {
            if (moveDirection === 'right') {
                if (workerPosition.left >= (targetPosition.left - 20)) {
                    return true;
                }
            } else {
                if (workerPosition.right <= (targetPosition.right - 20)) {
                    return true;
                }
            }
            return false;
        }

        requestAnimationFrame(moveWorker);

    }
    return { goToDestination }
}