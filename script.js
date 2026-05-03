// Initialize Lucide icons
lucide.createIcons();

// Simple counter animation for stats
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Lower inc to slow and higher to fast
            const inc = target / speed;

            // Check if target is reached
            if (count < target) {
                // Add inc to count and output in counter
                counter.innerText = (count + inc).toFixed(count % 1 !== 0 || target % 1 !== 0 ? 1 : 0);
                // Call function every ms
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});
