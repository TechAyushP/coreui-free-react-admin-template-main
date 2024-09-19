import React, { useEffect } from 'react'
import { Space, Table, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getcategory } from '../../ReduxToolkit/categorySlice';
const { Column, ColumnGroup } = Table;

const AllCategory = () => {
  const dispatch = useDispatch();
 

  useEffect(()=>{
    dispatch(getcategory());
  },[])

  const categoryData = useSelector( (state) => state.cat);
  
const columns=[
  {
    title:"Name",
    dataIndex:"name",
    key:"name",
  },
  {
    title:"Name",
    dataIndex:"name",
    key:"name",
  }
]

  const data = 
    categoryData?.data?.data?.map( (val,i) => (
      //console.log(i,'valllllllll');          
           
        {
          key: i,
          name: val.name,
         
          // action :
        }   
    ));
   
  return (
    <Table dataSource={data} columns={columns}>
    
    
  </Table>
  )
}

export default AllCategory
