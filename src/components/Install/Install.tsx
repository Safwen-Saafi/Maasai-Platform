import React from 'react';
import './Install.module.css'; // Importing the CSS file for styles
import classes from './Install.module.css';

const Install: React.FC = () => {
    return (

        <div className={classes.tradesection}>
            <div className={classes.color}></div>
            <div className={classes.tradecontainer}>
                <div className="radial-bgone hidden lg:block"></div>

                <div className={classes.grid}>
                    {/* Column-1 */}
                    <div className={classes.imagecolumn}>
                        <img src='/src/components/Install/images/macbook.png' alt="macBook-image" />
                    </div>

                    {/* Column-2 */}
                    <div className={classes.textcolumn}>
                        <h3 className={classes.heading}>Trade Anywhere <br /> <span className={classes.highlight}>Any</span> time</h3>
                        <p className={classes.description}>Download our App on any platform.</p>
                        <div className={classes.iconcontainer}>
                            <img src='/src/components/Install/images/mac.svg' alt="macOS-image" className={classes.icon} />
                            <div className={classes.verticalline}></div>
                            <img src='/src/components/Install/images/appstore.svg' alt="appstore-image" className={classes.icon} />
                            <div className={classes.verticalline}></div>
                            <img src='/src/components/Install/images/windows.svg' alt="windows-image" className={classes.icon} />
                            <div className={classes.verticalline}></div>
                            <img src='/src/components/Install/images/android.svg' alt="android-image" className={classes.icon} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Install;
