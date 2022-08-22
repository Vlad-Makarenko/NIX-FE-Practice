import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Context } from "../index";

export const Breadcrumbs = observer( () => { 

    const { BreadCrumbs } = useContext(Context)
    const isLast = (index) => {
        return index ===  BreadCrumbs.crumbs.length - 1;
    }

    return (
    <Container className="mt-3">
      <Breadcrumb>
        {BreadCrumbs.crumbs.map((crumb, index) => {
            return (
                isLast(index) 
                    ? <Breadcrumb.Item key={index} active>{crumb.name}</Breadcrumb.Item> 
                    : <Breadcrumb.Item key={index}><NavLink to={crumb.to}>{crumb.name}</NavLink></Breadcrumb.Item>
                
            )
        })}
      </Breadcrumb>
    </Container>
  );
});
