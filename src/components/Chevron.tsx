function Chevron({ size = 20 }: { size?: number }) {
    return (
        <svg className="arrow" width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" focusable="false">
            <path d="M5 7.5l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default Chevron
