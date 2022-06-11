// import React from 'react';
// // import { styled } from '@mui/material/styles';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem'
// import { useDispatch } from 'react-redux';
// import { fetchSuccess } from '../../../Redux/Search/actions';



// function FillterButton({setType,type,typeStr,typeArr,formatDate,jobs,fiterType}) {

//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const dispatch = useDispatch();
//     const handleClick = (event) => {
//       setAnchorEl(event.currentTarget);
      
//     };
  
//     const handleClose = (type) => {
//         setAnchorEl(null);
//         if(typeof type === 'string' || typeof type === 'number' )
//             setType(type)
//     };
//     return (
//         (<>
//             <button  className="menu"  onClick={handleClick}>
//                 {
//                     !type ? typeStr : formatDate ? `Last ${type === 1 ? '24 hours' : `${type} days` }` : type 
                    
//                 }
//             </button>
//             <Menu
//                 id="simple-menu"
//                 anchorEl={anchorEl}
//                 keepMounted
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//             >
//                 {
//                     typeArr.map( (type,index) => <MenuItem key={index} onClick={()=>{
                        
//                         const newJobs = jobs.filter((job) => job[fiterType] === type)
//                         dispatch(fetchSuccess(newJobs))
//                         handleClose(type)
//                         }}>
                        
//                         {formatDate ? `Last ${type === 1 ? '24 hours' : `${type} days` }` : type }
                        
//                         </MenuItem>
                        
//                     )
//                 }
            
//             </Menu>
//         </>)
//     );
// }

// export default FillterButton;