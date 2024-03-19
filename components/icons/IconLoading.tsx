export default function IconLoading(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg style={{ margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto' }} {...props} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle cx="50" cy="50" fill="none" stroke={props.color ?? '#b20b51'} strokeWidth="5" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.282051282051282s" values="0 50 50;360 50 50" keyTimes="0;1" />
      </circle>
    </svg>
  )
}