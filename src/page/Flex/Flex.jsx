/**
 * @file   Flex模块
 * @author zhong
 */

import React from 'react';
import style from './Flex.useable.less';
import SystemHeader from '../../components/system/Header/Header';

const FlexPage = React.createClass({

    componentWillMount: function () {
        style.use();
    },
    componentDidMount: function() {
    },
    componentWillUnmount: function () {
        style.unuse();
    },
    render: function () {
        var that = this;
        return (
            <div className="du-page-flex">

                <SystemHeader />

                <div className="du-page-bd">
                    <div className="du-page-bd-inner">

                        <section className="flex-section">
                            <div className="delta-bx">
                                <h2 className="delta-hd">Flex</h2>
                                <div className="delta-bd">
                                    <div className="case-1">
                                        <div className="du-flex">
                                            <div className="du-flex-item"><div className="placeholder">delta</div></div>
                                        </div>
                                        <div className="du-flex">
                                            <div className="du-flex-item"><div className="placeholder">delta</div></div>
                                            <div className="du-flex-item"><div className="placeholder">delta</div></div>
                                        </div>
                                        <div className="du-flex">
                                            <div className="du-flex-item"><div className="placeholder">delta</div></div>
                                            <div className="du-flex-item"><div className="placeholder">delta</div></div>
                                            <div className="du-flex-item"><div className="placeholder">delta</div></div>
                                        </div>
                                        <div className="du-flex">
                                            <div className="du-flex-item"><div className="placeholder">delta</div></div>
                                            <div className="du-flex-item"><div className="placeholder">delta</div></div>
                                            <div className="du-flex-item"><div className="placeholder">delta</div></div>
                                            <div className="du-flex-item"><div className="placeholder">delta</div></div>
                                        </div>
                                        <div className="du-flex">
                                            <div><div className="placeholder">delta</div></div>
                                            <div className="du-flex-item"><div className="placeholder">delta</div></div>
                                            <div><div className="placeholder">delta</div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>

            </div>
        );
    }
});

module.exports = FlexPage;