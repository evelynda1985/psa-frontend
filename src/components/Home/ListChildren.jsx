import React, {useEffect, useState} from "react";
import CheckingServices from "../../services/checking/CheckingServices";
import ParentServices from "../../services/parents/ParentServices";
import { List, Avatar,PageHeader  } from 'antd';

export default function ListChildren(props){
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        if (props.user) {
            ParentServices.getChildren(props.user).then(response => {
                setDataSource(response.data.map(  value=> { return  {title: value.FirstName, description:`School : ${value.school_name.name}`} } ));
            });
        }
    }, [props.user]);
    const fullName= `${props.user.user.FirstName} ${props.user.user.LastName}`;
// documentarion from : https://ant.design/components/page-header/
    return (

        <>
            <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                }}

                title="Children from"
                subTitle={fullName}
            />
        <List
            itemLayout="horizontal"
            dataSource={dataSource}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={item.title}
                        description={item.description}
                    />
                </List.Item>
            )}></List>
            </>

    );

}
