/**
 * Created by delta
 */
 
import React from 'react';
import classNames from 'classnames';
import './TabBar.duss';

export default class TabBar extends React.Component {

    render() {

        const {children, className, ...others} = this.props;
        const cls = classNames({
            'du-tabbar': true
        }, className);

        return (
            <div className={cls} {...others}>
                <div className="du-tabbar-bd">
                    {children}
                </div>
            </div>
        );
    }
}