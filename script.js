document.addEventListener('DOMContentLoaded', () => {

    const allOptionButtons = document.querySelectorAll('.option-btn');
    const allVehicles = document.querySelectorAll('.tron-vehicle');

    allOptionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;

            allOptionButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            allVehicles.forEach(vehicle => {
                vehicle.classList.remove('active');
            });
            
            const targetVehicle = document.getElementById(targetId);
            if (targetVehicle) {
                targetVehicle.classList.add('active');
            }
        });
    });
});