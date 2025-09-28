import { useScrollTrigger } from "@mui/material";
import React from "react";
import { BLACK_COLOR } from "../../constants/colors";
import PropTypes from "prop-types";

const ElevationScroll = React.memo(function ElevationScroll({ children }) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 1,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        sx: {
            ...children.props.sx,
            backgroundColor: trigger ? BLACK_COLOR : 'rgba(0, 0, 0, 0.9)',
            backdropFilter: trigger ? 'none' : 'blur(10px)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }
    });
});
ElevationScroll.propTypes = {
    children : PropTypes.element.isRequired,
};
export default ElevationScroll;