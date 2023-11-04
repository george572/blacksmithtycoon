import { ref } from "vue";
export const UseGoToDestination = () => {
    const arrivedAtDestination = ref(false);
    const goToDestination = (workerId: string, targetId: string) => {
        const target = document.getElementById(targetId) as HTMLDivElement;
        const worker = document.getElementById(workerId) as HTMLDivElement;
        const walkSpeed = 4.6;
        let moveDirection = '';
        let workerCurrentPosition = worker.getBoundingClientRect().left;

        function moveWorker() {
            const workerPos = worker.getBoundingClientRect().left;
            const targetPos = target.getBoundingClientRect().left;
            if (workerPos < targetPos) {
                moveDirection = 'right';
                workerCurrentPosition += walkSpeed;
            } else {
                moveDirection = 'left';
                workerCurrentPosition -= walkSpeed;
            }
            if (!workerArrivedAtTargetLocation()) {
                worker.style.left = `${workerCurrentPosition}px`;
                requestAnimationFrame(moveWorker);
            } else {
                console.log("Worker has arrived at the target.");
            }
        }

        const workerArrivedAtTargetLocation = () => {
            const workerCurrentPosition = worker.getBoundingClientRect();
            const targetPosition = target.getBoundingClientRect();
            if (moveDirection === 'right') {
                if (workerCurrentPosition.left >= (targetPosition.left - 20)) {
                    arrivedAtDestination.value = true;
                    return true;
                }
            } else {
                if (workerCurrentPosition.right <= (targetPosition.right + 20)) {
                    arrivedAtDestination.value = true;
                    return true;
                }
            }
            return false;
        }

        requestAnimationFrame(moveWorker);

    }
    return { goToDestination, arrivedAtDestination }
}