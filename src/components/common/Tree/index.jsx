import React, { memo, useState } from "react";
import { Link, Typography } from "@material-ui/core";
import { TreeView, TreeItem } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import { useSpring, a } from "react-spring";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import LinkIcon from "@material-ui/icons/Link";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        padding: "1rem",
    },
    labelRoot: {
        display: "flex",
        alignItems: "center",
        padding: "0.25rem",
    },
    labelText: {
        flexGrow: 1,
    },
    labelInfo: {
        justifyContent: "right",
    }
}));

export const Tree = (t) => {
    const classes = useStyles();

    const renderTree = (nodes) => (
        <TreeItem key={nodes.id} nodeId={nodes.id} icon={nodes.icon || undefined} onLabelClick={nodes.onClick || undefined} label={
            <Link href={nodes.link || null} color="inherit" underline="none">
                <div className={classes.labelRoot}>
                    <Typography className={classes.labelText}>{nodes.name}</Typography>
                    <Typography className={classes.labelInfo}>{nodes.info || ""}</Typography>
                </div>
            </Link>
            }
            >
            {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
        </TreeItem>
    );

    return(
        <TreeView
            // defaultExpanded={['root']}
            className={classes.root}
            defaultExpandIcon={<ChevronRightIcon />}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultEndIcon={<LinkIcon />}
        >
            {renderTree(t.data)}
        </TreeView>
    );
};