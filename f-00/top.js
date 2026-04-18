let red = React.createElement('div',{className:'red'})
let yellow = React.createElement('div',{className:'yellow'})
let green = React.createElement('div',{className:'green'})
let controls = React.createElement('div',{className:'controls'},[red,yellow,green])

//==========================//

let back = React.createElement(
  'svg',
  {
    className: 'icon',
    viewBox: '0 0 24 14'
  },
  React.createElement('path', {
    d:"M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"
  })
);

let forward = React.createElement(
    'svg',
    {
      className: 'icon',
      viewBox: '0 0 24 14'  
    },
    React.createElement('path',{
        d:"M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"
    })
)

let backForward = React.createElement('div',{className:'nav'},[back,forward])

//============================/

let shield = React.createElement('svg',{className:'icon',
    viewBox:"0 0 24 14"},
React.createElement('path',{
    d:"M12 2l7 4v6c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-4z"
}))

//===========================//
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.53614 5.11383 7.33243 6.86543 5.86492L9 8V2L3 2L5.44648 4.44656C3.33509 6.28002 2 8.9841 2 12Z"></path></svg> */}
let lock = React.createElement('svg',{className:'icon',viewBox:"0 0 24 14"},
    React.createElement('path',{
d:"M17 9h-1V7a4 4 0 10-8 0v2H7a2 2 0 00-2 2v8h14v-8a2 2 0 00-2-2zm-6 0V7a2 2 0 114 0v2h-4z"
    })
)
let span = React.createElement('span',{},'www.wolpxel.agency')
let combined = React.createElement(
  'div',
  { className: 'address-bar' },
  lock,
  span
);
let refresh = React.createElement('svg',{className:'icon',viewBox:"0 0 24 14"},
    React.createElement('path',{
d:"M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.53614 5.11383 7.33243 6.86543 5.86492L9 8V2L3 2L5.44648 4.44656C3.33509 6.28002 2 8.9841 2 12Z"
    })
)
let url = React.createElement('div',{className:'url'},[combined,refresh])

//======================================//
let random = React.createElement('svg',{className:'icon',viewBox:"0 0 24 14"},
    React.createElement('path',{
d:"M3 19H21V21H3V19ZM13 5.82843V17H11V5.82843L4.92893 11.8995L3.51472 10.4853L12 2L20.4853 10.4853L19.0711 11.8995L13 5.82843Z"
    })
)
//===========================//
let send = React.createElement('svg',{className:'icon',viewBox:"0 0 24 14"},
    React.createElement('path',{
d:"M4.7134 7.12811L4.46682 7.69379C4.28637 8.10792 3.71357 8.10792 3.53312 7.69379L3.28656 7.12811C2.84706 6.11947 2.05545 5.31641 1.06767 4.87708L0.308047 4.53922C-0.102682 4.35653 -0.102682 3.75881 0.308047 3.57612L1.0252 3.25714C2.03838 2.80651 2.84417 1.97373 3.27612 0.930828L3.52932 0.319534C3.70578 -0.106511 4.29417 -0.106511 4.47063 0.319534L4.72382 0.930828C5.15577 1.97373 5.96158 2.80651 6.9748 3.25714L7.69188 3.57612C8.10271 3.75881 8.10271 4.35653 7.69188 4.53922L6.93228 4.87708C5.94451 5.31641 5.15288 6.11947 4.7134 7.12811ZM6.33421 15.8154C6.51032 15.233 6.7072 14.6562 6.93912 14.0327C8.99484 8.50636 12.4197 5.08172 18.0129 4.21479C17.5 5.35838 17.0151 6.15301 16.5858 6.58237C16.2521 6.91603 15.9185 7.24993 15.5848 7.58407L14.1721 8.99878L15.6279 10.4535C14.4976 12.5384 12.2652 14.1979 9.75193 14.512C8.43544 14.6766 7.29345 15.1188 6.33421 15.8154ZM18 9.99658L17 8.99728C17.3331 8.66372 17.6662 8.33039 18.0027 7.99391C19.0018 6.99303 20.0009 4.99392 21 1.99658C6.31105 1.99658 4.08854 15.422 3.06361 21.6132C3.0419 21.7443 3.02074 21.8722 3 21.9966H4.99824C5.66421 18.6635 7.33146 16.8301 10 16.4966C14 15.9966 17 12.9966 18 9.99658Z"
    })
)

//============================//
let plus = React.createElement('svg',{className:'icon',viewBox:"0 0 24 14"},
    React.createElement('path',{
d:"M11 11.0001L11 2.0005L13 2.00049L13 11.0001L22.0001 10.9999L22.0002 12.9999L13 13.0001L13.0001 22L11.0001 22L11.0001 13.0001L2.00004 13.0003L2 11.0003L11 11.0001Z"
    })
)

//============================//
let copy = React.createElement('svg',{className:'icon',viewBox:"0 0 24 14"},
    React.createElement('path',{
d:"M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"
    })
)

const top = ()=>{
    return React.createElement('div',{id:'top'},[controls,backForward,shield,url,random,send,plus,copy])
}

export default top