const tooltipIcon = document.getElementById('tooltip-icon');
const tooltip = document.getElementById('tooltip');

function positionTooltip() {
    tooltip.style.display = 'block';
    const iconRect = tooltipIcon.getBoundingClientRect();

    // Position the tooltip below the text and icon
    tooltip.style.top = `${iconRect.bottom + 5}px`; // Adjust to position below
    tooltip.style.left = '50%'; // Center tooltip horizontally
    tooltip.style.transform = 'translateX(-50%)'; // Center tooltip horizontally
}

tooltipIcon.addEventListener('mouseenter', () => {
    positionTooltip();
});

tooltipIcon.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
});
