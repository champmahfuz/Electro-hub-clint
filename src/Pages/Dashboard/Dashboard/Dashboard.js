import React from 'react';
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import styles from './Dashboard.module.css';

const Dashboard = () => {
    const { logOut } = useAuth();

    return (
        <div>
            <Container fluid className="p-5">
                <Tab.Container id="left-tabs-example" defaultActiveKey="my-order">
                    <Row xs={1} sm={1} md={2} lg={2} xl={2} className="g-3 g-lg-4">
                        <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                            <div className="bg-light rounded-3 py-4 border" style={{ minHeight: '80vh', position: 'sticky', top: '114px' }}>
                                <Nav variant="light" className={`${'flex-column'} ${styles.dashNav}`}>
                                    <>
                                        <Link to="/home">
                                            Home
                                        </Link>
                                        <Link to="/dashboard">
                                            Dashboard
                                        </Link>
                                        <Link to="manage-order">
                                            Manage Order
                                        </Link>
                                        <Link to="my-order">
                                            My Order
                                        </Link>
                                        <Link to='/login' className="" onClick={logOut}><span className=""></span>Logout</Link>
                                    </>
                                </Nav>
                            </div>
                        </Col>

                        <Col xs={12} sm={12} md={8} lg={9} xl={9}>
                            <div className="bg-light rounded-3 px-2 py-4 border">
                                <Outlet />
                            </div>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    );
};

export default Dashboard;