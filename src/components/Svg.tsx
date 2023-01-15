import React, { FC } from 'react'

interface Svg {
  click: () => void
  classname?: string
}
export const Svg: FC<Svg> = ({ click, classname }) => {
  const handleClick = () => {
    click?.()
  }

  return (
    <svg
      onClick={handleClick}
      className={classname}
      width='400'
      height='547'
      viewBox='0 0 400 547'
      fill='rgba(245, 187, 44, 0)'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.37256 13.1148L9.10227 6.38509L9.60496 6.69753L10.9282 6.23676L2.99302 14.172L2.37256 13.1148Z'
        fill='#F5BB2C'
      />
      <path
        d='M6.57865 22.4486L5.33592 22.0137L24.8088 2.54077L26.1557 2.87155L6.57865 22.4486Z'
        fill='#F5BB2C'
      />
      <path
        d='M12.2503 28.6391L11.9025 27.3094L32.4366 6.77525L33.2425 7.64696L12.2503 28.6391Z'
        fill='#F5BB2C'
      />
      <path
        d='M18.8473 33.9044L17.6075 33.4666L24.9328 26.1413L24.9859 26.1225L25.5914 27.1603L18.8473 33.9044Z'
        fill='#F5BB2C'
      />
      <path
        d='M24.0858 40.5282L23.4927 39.4437L31.9426 30.9938L32.5023 31.681L32.4796 32.1343L24.0858 40.5282Z'
        fill='#F5BB2C'
      />
      <path
        d='M25.5929 50.8833L25.1022 49.6964L31.6515 43.1471L31.9039 44.5723L25.5929 50.8833Z'
        fill='#F5BB2C'
      />
      <path
        d='M31.6825 56.6559L30.8213 56.7606L30.3093 56.3516L35.0324 51.6284L36.1662 52.1723L31.6825 56.6559Z'
        fill='#F5BB2C'
      />
      <path
        d='M39.8003 60.4003L39.1421 59.5099L39.0613 59.4618L42.263 56.2602L44.8142 55.3865L39.8003 60.4003Z'
        fill='#F5BB2C'
      />
      <path
        d='M47.5239 64.539L46.4777 63.9077L50.8004 59.585L51.2607 60.8022L47.5239 64.539Z'
        fill='#F5BB2C'
      />
      <path
        d='M56.4177 89.5544L59.2686 86.7035L60.2322 87.4175L57.2321 90.4176L56.7804 89.7998L56.4177 89.5544Z'
        fill='#F5BB2C'
      />
      <path
        d='M64.8138 94.6981L63.4852 96.0267L63.2281 95.5865L64.681 94.554L64.8138 94.6981Z'
        fill='#F5BB2C'
      />
      <path
        d='M104.393 148.339L115.879 136.854L117.268 137.142L103.741 150.669L104.393 148.339Z'
        fill='#F5BB2C'
      />
      <path
        d='M100.359 165.913L100.276 164.318L117.697 146.898L117.646 148.626L100.359 165.913Z'
        fill='#F5BB2C'
      />
      <path
        d='M106.59 171.545L106.585 171.546L106.107 170.35L115.885 160.571L116.479 160.632L116.648 159.809L118.246 158.21L118.292 158.267L118.192 159.942L106.59 171.545Z'
        fill='#F5BB2C'
      />
      <path
        d='M98.2801 190.039L99.4853 188.834L100.918 188.918L101.027 188.969L98.6536 191.343L98.2801 190.039Z'
        fill='#F5BB2C'
      />
      <path
        d='M78.6439 223.215L78.8132 222.689L78.8261 221.355L90.9942 209.187L91.4439 210.415L78.6439 223.215Z'
        fill='#F5BB2C'
      />
      <path
        d='M81.2015 232.52L80.8476 231.196L87.5866 224.457L87.6044 226.117L81.2015 232.52Z'
        fill='#F5BB2C'
      />
      <path
        d='M93.8023 230.103L94.3742 230.925L95.1186 230.241L94.2851 229.621L107.121 216.785L107.672 217.911L92.2975 233.286L91.6033 232.302L93.8023 230.103Z'
        fill='#F5BB2C'
      />
      <path
        d='M98.0446 239.401L97.6521 239.185L96.3627 239.405L116.103 219.665L116.932 220.513L98.0446 239.401Z'
        fill='#F5BB2C'
      />
      <path
        d='M110.187 239.121L109.281 238.349L120.509 227.121L121.249 228.059L110.187 239.121Z'
        fill='#F5BB2C'
      />
      <path
        d='M116.999 244.171L115.711 243.831L115.684 243.808L125.365 234.128L125.7 235.463L125.704 235.466L116.999 244.171Z'
        fill='#F5BB2C'
      />
      <path
        d='M120.694 204.889L115.289 210.294L114.786 209.627L114.714 209.192L119.963 203.943L120.694 204.889Z'
        fill='#F5BB2C'
      />
      <path
        d='M115.749 196.295L115.783 196.373L113.686 200.035L111.91 201.811L111.676 200.419L111.659 200.385L115.749 196.295Z'
        fill='#F5BB2C'
      />
      <path
        d='M127.304 162.693L124.335 165.661L123.115 165.204L126.896 161.423L127.333 161.893L127.304 162.693Z'
        fill='#F5BB2C'
      />
      <path
        d='M122.272 166.047L121.582 167.776L121.929 168.068L121.596 168.401L120.831 167.488L122.272 166.047Z'
        fill='#F5BB2C'
      />
      <path
        d='M127.432 172.749L127.462 172.719L127.694 172.914L127.432 172.749Z'
        fill='#F5BB2C'
      />
      <path
        d='M112.961 187.221L112.565 187.777L112.759 189.1L108.454 193.405L108.41 193.408L107.848 192.333L112.961 187.221Z'
        fill='#F5BB2C'
      />
      <path
        d='M104.391 195.79L99.4016 200.78L99.4051 200.791L98.7314 201.45L98.1145 202.067L98.7928 202.424L98.9419 202.917L104.481 197.378L104.568 195.965L104.391 195.79Z'
        fill='#F5BB2C'
      />
      <path
        d='M107.285 204.758L90.4649 221.579L90.9195 222.802L107.78 205.941L107.774 205.857L107.285 204.758Z'
        fill='#F5BB2C'
      />
      <path
        d='M83.8388 206.158L83.3572 206.639L83.3278 204.993L83.8388 206.158Z'
        fill='#F5BB2C'
      />
      <path
        d='M107.87 275.347L116.845 266.372L117.15 267.745L107.96 276.934L108.29 276.078L107.87 275.347Z'
        fill='#F5BB2C'
      />
      <path
        d='M112.542 284.215L112.493 284.073L113.561 282.945L113.345 281.972L113.159 281.92L121.555 273.525L122.218 274.241L122.426 274.331L112.542 284.215Z'
        fill='#F5BB2C'
      />
      <path
        d='M117.651 290.969L117.019 290.809L116.613 290.329L130.74 276.202L131.849 276.77L117.651 290.969Z'
        fill='#F5BB2C'
      />
      <path
        d='M123.872 296.609L123.299 296.283L123.062 295.741L137.667 281.136L137.512 282.969L123.872 296.609Z'
        fill='#F5BB2C'
      />
      <path
        d='M131.199 301.145L129.735 301.806L129.443 301.223L132.403 298.263L132.628 298.456L132.598 299.745L131.199 301.145Z'
        fill='#F5BB2C'
      />
      <path
        d='M143.667 288.677L141.569 290.774L140.572 290.094L142.683 287.983L142.702 288.023L143.667 288.677Z'
        fill='#F5BB2C'
      />
      <path
        d='M353.193 480.79L359.745 474.237L360.258 475.402L354.091 481.569L353.193 480.79Z'
        fill='#F5BB2C'
      />
      <path
        d='M354.104 493.418L353.424 492.421L364.77 481.075L365.813 481.709L354.104 493.418Z'
        fill='#F5BB2C'
      />
      <path
        d='M357.82 501.564L357.075 501.169L356.897 500.81L371.416 486.291L372.247 487.137L357.82 501.564Z'
        fill='#F5BB2C'
      />
      <path
        d='M367.036 504.21L366.24 503.329L368.541 501.028L369.293 501.954L367.036 504.21Z'
        fill='#F5BB2C'
      />
      <path
        d='M392.813 536.067L393.505 535.375L393.744 535.517L394.133 536.425L393.214 537.344L392.813 536.067Z'
        fill='#F5BB2C'
      />
      <path
        d='M397.882 544.538L397.599 543.909L397.17 543.572L398.571 542.171L398.501 543.919L397.882 544.538Z'
        fill='#F5BB2C'
      />
      <path
        d='M116.117 265.545L116.693 268.139L117.702 269.471L118.59 269.243L118.734 270.828L121.604 273.925L123.357 274.682L124.822 273.721L128.292 274.946L137.165 279.496L136.817 283.614L141.055 285.559L142.088 287.708L143.577 288.716L146.711 289.929L146.242 293.026L143.433 291.213L141.728 290.985L138.558 288.824L136.865 288.932L133.155 290.517L130.369 294.143L129.757 296.208L132.014 298.14L131.966 300.205L129.12 301.49L128.7 300.65L126.347 300.001L126.143 297.936L122.685 295.967L121.28 292.75L119.407 292.114L118.962 291.141L116.405 290.493L114.268 287.972L114.76 285.595L112.263 284.862L111.878 283.758L112.947 282.629L112.731 281.657L109.417 280.732L108.961 280.18L107.532 278.355L107.052 277.383L107.676 275.762L106.439 273.613L107.148 272.473L107.004 272.064L106.583 271.044L107.292 270.792L107.376 269.219L108.733 268.079L108.66 267.25L114.988 262.124L116.237 263.576L116.117 265.545ZM100.304 188.602L102.393 189.586L102.441 190.247L101.708 190.115L102.897 192.192L102.945 194.653L103.954 195.649L103.822 197.786L105.551 198.326L106.163 201.472L105.659 202.168L107.16 205.542L107.388 208.843L106.992 210.128L104.326 212.013L107.064 217.607L107.916 218.604H109.141L111.17 216.635L111.386 215.314L112.695 214.846L112.239 217.355L113.787 216.623L114.652 217.139L114.676 218.52L116.321 220.2L116.261 222.193L122.192 229.721L122.937 232.086L123.633 232.902L124.474 232.71L125.086 235.147L127.511 237.332L125.59 244.164L124.474 245.256L122.132 243.611L119.683 244.728L115.096 243.515L108.576 237.957L106.127 237.032L104.962 236.996L102.849 238.881L101.144 239.265L100.676 240.874L97.0377 238.869L94.7924 239.253L94.4682 238.101L92.1149 236.708L92.9914 234.823L90.686 231.558L91.4185 229.709L90.0497 226.972L91.2023 226.936L93.7598 230.609L94.5043 229.925L93.0514 228.844L92.9434 226.972L91.3344 225.255L88.3087 217.115L88.2727 215.218L87.4922 214.834L86.3635 214.846L85.1628 216.503L86.2555 218.244L85.8953 219.96L86.9519 222.241L87.0479 231.198L84.0222 231.366L80.7803 232.926L80.1319 230.501L76.1096 228.736L75.9055 227.26L75.9415 225.771L77.2983 225.171L78.1988 222.373L78.2468 217.403L80.1799 217.523L80.4921 216.011L81.5968 215.146L81.3446 212.589L82.7855 208.711L82.7134 204.677L83.9141 207.415L85.0188 205.254L87.3001 204.545L87.9965 208.663L88.909 209.287L90.3739 208.855L91.1303 210.92L94.012 209.323L96.1612 206.334L97.2299 206.442L97.0497 205.025L98.2144 204.929L98.6467 203.657L98.1784 202.108L96.3533 201.148L96.3173 200.235L97.494 200.367L97.6981 201.544L98.7908 200.475L97.6981 196.934L98.4906 196.502L98.3945 195.157L97.3019 194.281L98.1424 191.387L97.482 189.082L98.0463 188.47L100.304 188.602ZM109.753 184.556L112.779 186.297L111.95 187.461L112.215 189.262L111.182 190.355L113.283 191.027L114.22 190.031L114.82 191.363L113.968 191.735L115.276 192.011L116.117 193.632L114.784 195.169L115.168 196.057L112.371 200.944L112.323 203.165L115.3 202.024L115.276 201.148L115.781 200.199L116.633 200.944L117.594 200.571L116.717 199.503L118.962 200.199L120.031 201.412L119.587 202.252L119.011 203.189L120.271 204.821L119.239 206.706L119.923 206.922L119.743 208.231L122.336 209.492L118.158 211.593L117.486 212.061L115.565 211.16L114.172 209.311L113.523 205.398L111.77 204.329L111.062 200.103L108.805 195.697L108.841 193.032L107.796 193.092L106.007 189.67L106.355 187.689L108.961 189.214L109.537 188.89L109.753 184.556ZM123.801 160.881L124.834 160.509L124.654 162.178L126.227 161.049L126.719 161.577L126.671 162.874L126.299 163.858L123.789 165.371L122.06 164.723L120.968 167.46L127.079 172.599L122.168 169.501L118.878 165.575L119.395 161.673L121.94 162.946L121.88 161.83L122.745 161.265L123.801 160.881ZM114.436 136.366L117.209 136.942L115.889 139.067L117.87 142.645L117.161 143.893L117.017 148.792L118.506 151.697L118.494 153.27L114.856 158.576L114.7 160.197L115.865 160.317L116.621 156.631L117.678 157.952L117.51 160.761L117.089 161.337L116.249 161.001L117.786 166.74L116.573 168.06L114.568 165.671L115.12 168.625L114.316 168.889L113.619 170.041L112.191 170.774L110.293 169.681L108.913 171.386L109.501 173.607L108.66 173.979L107.784 172.755L107.952 170.87L105.971 171.23L104.938 168.649L105.19 167.268L103.894 166.668L101.12 172.779L98.0823 176.38L98.9829 174.075L98.0343 172.851L98.8988 171.866L98.5626 170.594L99.3191 169.921L99.7993 166.644L99.4511 159.945L101.708 155.419L104.29 146.198L105.347 144.758L106.607 144.554L109.405 138.995L112.191 139.163L113.535 136.414H114.436V136.366ZM64.0666 94.2384L67.4766 97.9361L66.2639 98.1642L64.5228 96.4834L63.4062 96.6275L62.6137 95.2709L64.0666 94.2384ZM54.1488 82.3169L58.0631 84.634L57.859 85.7985L60.2243 87.5513L59.8761 88.8719L61.7732 89.9884L62.0854 91.6812L58.5794 91.4771L56.9825 90.6007L56.166 89.4842L54.5691 88.4037L54.6291 86.7829L53.8606 85.3903L52.804 85.0662L52.8641 82.485L53.5124 82.1848L54.1488 82.3169ZM24.0593 2.19194L26.1125 2.69619L27.5774 5.20534L30.2549 6.56195L30.9513 5.51748L33.0045 7.73851L33.6289 6.58597L34.9497 8.31477L33.881 11.2441L33.2927 12.7688L32.128 14.0054L25.8964 16.1544L23.0387 17.8712L22.2343 19.4919L23.3029 20.6445L22.5344 22.1691L24.7918 23.8259L23.6871 24.7623L22.6545 24.4982L23.423 26.143L24.3715 25.8068L25.212 27.2475L29.2103 28.9883L32.5363 29.3845L31.2035 30.525L31.8879 31.3654L31.7918 33.2863L30.5191 34.4868L30.0508 37.2601L32.104 48.8575L33.0285 50.6463L36.5826 52.3511L39.6684 52.5792L41.5895 55.9647L45.5158 54.6201L47.4249 51.9669L50.9429 61.2712L52.8401 63.4322L51.7354 66.0134L50.1625 65.125L48.8417 65.3891L42.5141 61.5713L39.7524 60.851L38.5277 59.1942L35.3819 57.3214L32.3802 56.1808L30.2069 56.445L26.0285 53.1074L23.6511 47.3568L23.6271 44.1873L22.7386 42.6266L23.531 40.3215L21.4298 36.4797L18.6682 33.7425L15.4383 32.602L15.6544 31.2573L11.9323 29.4565L11.1158 26.3351L9.69898 25.3146L10.5035 22.4693L8.90652 22.8895L7.40565 22.6374L4.52398 21.6289L5.52055 17.0788L3.73151 15.7942L2.38673 17.391L2.57884 14.1975L1.40216 12.1926L1.18604 11.2081L4.48795 4.94122L5.0763 5.61352L7.21354 5.27737L8.99057 6.38188L12.7488 5.07328L13.7814 5.75758L15.6905 5.09729L17.6476 6.2018L20.2171 4.9172L23.1828 1.83179L24.0593 2.19194Z'
        stroke='#F5BB2C'
      />
      <path
        d='M394.127 537.531L394.787 536.198L396.924 537.603L397.981 541.252L397.813 545.43L396.984 543.593L393.899 541.168L391.773 534.397L393.13 535.201L394.127 537.531ZM357.926 471.188L361.408 479.088L367.939 483.061L373.955 489.184L374.075 490.241L372.682 492.354L371.542 492.066L368.672 492.63L367.687 498.02L367.915 500.698L368.996 502.03L368.324 502.15L367.915 504.299L366.571 504.059L365.226 502.57L363.449 503.435L362.716 502.294L361.648 504.179L360.243 501.67L358.682 502.03L356.461 500.854L355.392 498.693L352.931 495.295L353.831 493.602L352.102 491.069L353.663 489.124L354.311 489.52L354.876 488.752L353.543 486.255L354.54 483.758L353.915 481.633L351.118 479.208L352.823 474.742L354.564 472.869L354.384 471.656L356.161 471.752L357.397 470.456L357.926 471.188Z'
        stroke='#F5BB2C'
      />
    </svg>
  )
}
