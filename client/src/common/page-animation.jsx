const AnimationWrapper = ({
    children, keyValue, initial = { opacity: 0 },
    animate = { opacity: 1 },
    transition = { duration: 1 },
    className
}) => {
    return (
        // AnimatePresence enables the animation of components that are removed from the React tree
        <AnimatePresence>
            <motion.div
                // The key prop helps React identify which items have changed, are added, or are removed
                key={keyValue}
                // Initial animation state
                initial={initial}
                // Animation state to transition to
                animate={animate}
                // Animation transition settings
                transition={transition}
                // Additional CSS classes
                className={className}
            >
                {/* Render any child components passed to AnimationWrapper */}
                {children}
            </motion.div>
        </AnimatePresence>
    );
}

export default AnimationWrapper;
