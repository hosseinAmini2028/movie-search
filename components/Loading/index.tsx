"use client";


type OpacityType = 'full' | 'low'
type SizeType = 'small' | 'large';
export type LoadingProps = {
  text ?:string,
  opacity ?: OpacityType;
  inScreen ?: boolean;
  size ?: SizeType;
  absolute ?: boolean;
}
export default function Loading() {
  return (
    <div className={'w-full h-full absolute right-0 left-0 bg-slate-50/30 flex flex-col justify-center items-center gap-3'}>
      <span>
        <svg
          style={{
            margin: "auto",
            display: "inline-block",
            shapeRendering: "auto",
          }}
          width={"200px"}
          height={"200px"}
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle
            cx="50"
            cy="50"
            r="0"
            fill="none"
            stroke="#e90c59"
            strokeWidth="2"
          >
            <animate
              attributeName="r"
              repeatCount="indefinite"
              dur="1s"
              values="0;40"
              keyTimes="0;1"
              keySplines="0 0.2 0.8 1"
              calcMode="spline"
              begin="0s"
            />
            <animate
              attributeName="opacity"
              repeatCount="indefinite"
              dur="1s"
              values="1;0"
              keyTimes="0;1"
              keySplines="0.2 0 0.8 1"
              calcMode="spline"
              begin="0s"
            />
          </circle>
          <circle
            cx="50"
            cy="50"
            r="0"
            fill="none"
            stroke="#46dff0"
            strokeWidth="2"
          >
            <animate
              attributeName="r"
              repeatCount="indefinite"
              dur="1s"
              values="0;40"
              keyTimes="0;1"
              keySplines="0 0.2 0.8 1"
              calcMode="spline"
              begin="-0.5s"
            />
            <animate
              attributeName="opacity"
              repeatCount="indefinite"
              dur="1s"
              values="1;0"
              keyTimes="0;1"
              keySplines="0.2 0 0.8 1"
              calcMode="spline"
              begin="-0.5s"
            />
          </circle>
        </svg>
      </span>
    </div>
  );
}
