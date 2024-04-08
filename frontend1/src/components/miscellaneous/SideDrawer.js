import { Box, Button, Text } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react';
import React, { useState } from 'react';

const SideDrawer = () => {
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingChat, setLoadingChat] = useState();

    return (
        <Box>
            <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
                <Button variant="ghost">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <Text px={{ base: 0, md: 4 }} display={{ base: "none", md: "flex" }}>Search User</Text>
                </Button>
            </Tooltip>
        </Box>
    );
};

export default SideDrawer;
