import React, {useEffect, useState} from 'react';
import {Avatar, Card, Col, Icon, Modal, Row} from 'antd';
import PlaceHolder from "../../modules/PlaceHolder";
import CheckingServices from "../../services/checking/CheckingServices";

const {Meta} = Card;
const DrawCard = (props) => {


    const doChecking = (user) => {

        CheckingServices.doChecking(props.user, props.event_id).then(response => {
            Modal.success({title: 'Info', content: "Checking Successful"});
        }).catch(error => {

            Modal.error({title: 'Error', content: 'Error doing checking'});
        });

    }

    return (<>


        <Card style={{width: 300, marginTop: 16}} loading={props.loading}
              actions={[
                  <Icon type="play-circle" key="play-circle" onClick={() => doChecking(props.user, props.event_id)}/>]}
        >
            <Meta
                avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                }
                title={props.title}
                description={props.description}
            />
        </Card>
    </>)
}

export default function Checking(props) {
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        if (props.user) {

            CheckingServices.getEvents(props.user).then(response => {

                setDataSource(response.data);
            });

        }


    }, [props.user]);

    return (
        <>
            <Row>
                <Col span={8}></Col>
                <Col span={8}>
                    {dataSource.map((event, index) => {
                        if (event) {
                            return (<DrawCard {...props} event_id={event.id} title={event.name}
                                              description={event.school_name.name + "/" + event.city.name}
                                              loading={false}/>);
                        }
                        return (<></>);
                    })}
                </Col>
                <Col span={8}></Col>
            </Row>
        </>
    );
}
