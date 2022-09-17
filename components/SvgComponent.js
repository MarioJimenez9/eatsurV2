
import react from "react"
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg"

const SvgComponent = () => (
    <Svg    
      style={{
        transform: [{rotate: '180deg'}],
        transition: ".3s",
      }}
      viewBox="0 0 1440 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Defs>
        <LinearGradient id="a" x1={0} x2={0} y1={1} y2={0}>
          <Stop stopColor="rgba(62, 243, 126, 1)" offset="0%" />
          <Stop stopColor="rgba(164, 255, 11, 1)" offset="100%" />
        </LinearGradient>
      </Defs>
      <Path
        style={{
          transform: [{translateX: 0}],
          transform: [{translateY: 0}],
          opacity: 1,
        }}
        fill="url(#a)"
        d="M0 48h26.7c26.6 0 80.3 0 133.3-8 53.3-8 107-24 160-24 53.3 0 107 16 160 88 53.3 72 107 200 160 200 53.3 0 107-128 160-176 53.3-48 107-16 160-16 53.3 0 107-32 160-40 53.3-8 107 8 160 24 53.3 16 107 32 160 56 53.3 24 107 56 160 96 53.3 40 107 88 160 80 53.3-8 107-72 160-136 53.3-64 107-128 160-112 53.3 16 107 112 160 120 53.3 8 107-72 160-104 53.3-32 107-16 160 48 53.3 64 107 176 160 176 53.3 0 107-112 160-120 53.3-8 107 88 160 96 53.3 8 107-72 160-104 53.3-32 107-16 160-8 53.3 8 107 8 160 24 53.3 16 107 48 160 24 53.3-24 107-104 133-144l27-40v432H0Z"
      />
    </Svg>
  )

  export default SvgComponent
  