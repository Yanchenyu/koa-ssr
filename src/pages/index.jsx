import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../config/routes';

export default function() {
    return (
        <Switch>
            {
                routes.map((route, index) => (
                    <Route key={`${index}_${route.path}`}  {...route} />
                ))
            }
        </Switch>
    );
}
