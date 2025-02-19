import './userList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline, HandymanOutlined } from '@mui/icons-material';
import {userRows} from "../../DummyData";
import { Link } from "react-router-dom";
import {useState } from "react";

export default function UserList() {
    const [data,setData] = useState(userRows);
    const handleDelete = (id) =>
        setData(data.filter(item=>item.id !== id));
};
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { 
            field: 'username', 
            headerName: 'Username', 
            width: 130,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                );
            } 
        }, 
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'transaction', headerName: 'Transaction Volume', width: 160 },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                    <Link to={"/user/"+params.row.id}><button className="userListEdit">Edit</button>
</Link>
                        <DeleteOutline className="userListDelete" OnClick={()=> HandleDelete(params.rows.id)} />
                    </>
                );
            },
        },
    ];

    const rows = [
        { id: 1, username: 'Jon Snow', avatar: 'https://www.pexels.com/photo/1261731/', email: 'john@gmail.com', status: 'active', transaction: '$120.00' },
        { id: 2, username: 'Cersei Lannister', avatar: 'https://www.pexels.com/photo/1261731/', email: 'cersei@gmail.com', status: 'active', transaction: '$150.00' },
        { id: 3, username: 'Jaime Lannister', avatar: 'https://www.pexels.com/photo/1261731/', email: 'jaime@gmail.com', status: 'active', transaction: '$200.00' },
        { id: 4, username: 'Arya Stark', avatar: 'https://www.pexels.com/photo/1261731/', email: 'arya@gmail.com', status: 'active', transaction: '$170.00' },
        { id: 5, username: 'Arya Stark', avatar: 'https://www.pexels.com/photo/1261731/', email: 'arya@gmail.com', status: 'active', transaction: '$170.00' },
        { id: 6, username: 'Arya Stark', avatar: 'https://www.pexels.com/photo/1261731/', email: 'arya@gmail.com', status: 'active', transaction: '$170.00' },
        { id: 7, username: 'Arya Stark', avatar: 'https://www.pexels.com/photo/1261731/', email: 'arya@gmail.com', status: 'active', transaction: '$170.00' },
        { id: 8, username: 'Arya Stark', avatar: 'https://www.pexels.com/photo/1261731/', email: 'arya@gmail.com', status: 'active', transaction: '$170.00' },
        { id: 9, username: 'Arya Stark', avatar: 'https://www.pexels.com/photo/1261731/', email: 'arya@gmail.com', status: 'active', transaction: '$170.00' },
        { id: 10, username: 'Arya Stark', avatar: 'https://www.pexels.com/photo/1261731/', email: 'arya@gmail.com', status: 'active', transaction: '$170.00' ,
        },
    ];
    


    return (
        <div className="userList">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
