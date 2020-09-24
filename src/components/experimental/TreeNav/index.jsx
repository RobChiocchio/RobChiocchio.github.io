import React from "react";
import { Container, Box, Paper } from "@material-ui/core";
import { Tree } from "components/common";
import { useStaticQuery, graphql } from "gatsby";

import StarIcon from '@material-ui/icons/Star';
import CodeIcon from '@material-ui/icons/Code';

import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';

export const TreeNav = () => {
    const {
        github: {
            viewer: {
                repositories: {
                    edges
                },
            },
        },
    } = useStaticQuery(
        graphql`
            {
                github {
                    viewer {
                        repositories(first: 6, orderBy: { field: STARGAZERS, direction: DESC }) {
                            edges {
                                node {
                                    id
                                    name
                                    url
                                    description
                                    stargazers {
                                        totalCount
                                    }
                                    forkCount
                                }
                            }
                        }
                    }
                }
            }
        `
    );
    const projects = edges.map((node) => (
        {
            id: node.node.id,
            name: node.node.name,
            info: (
                <span style={{display: "flex", alignItems: "center"}}>
                    {node.node.stargazers.totalCount}
                    <StarIcon fontSize="inherit" />
                </span>
            ),
            link: node.node.url,
            icon: <CodeIcon />,
        }
    ));
    const data = {
        id: "root",
        name: "hello!",
        children: [
            {
                id: "1",
                name: "about me",
                link: "#",
            },
            {
                id: "2",
                name: "some other stuff",
                children: [
                    {
                        id: "3",
                        name: "wacky",
                        info: "69",
                    },
                ],
            },
            {
                id: "git",
                name: "some of my projects",
                children: projects,
            },
        ],
    };

    return(
        <Box p={"33vh"}>
            <Container maxWidth="sm">
                <Paper>
                    <Tree data={data} />
                </Paper>
            </Container>
        </Box>
    );
};