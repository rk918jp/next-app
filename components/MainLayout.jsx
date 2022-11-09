import {
    AppBar,
    Box,
    Container,
    Divider,
    Grid,
    listClasses,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    MenuList,
    Tab,
    Tabs,
    Toolbar,
    Typography,
} from "@mui/material";
import Link from "next/link";
import { Add, Dashboard } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const MainLayout = ({ children }) => {
    const router = useRouter();
    // URLパラメータ、パスパラメータを取得
    const { category } = router.query;

    const [value, setValue] = useState(undefined);

    // タブを変更した時のページ遷移処理
    useEffect(() => {
        if (category && !value) {
            setValue(category);
        }

        if (value !== category) {
            // 画面遷移
            router.push(`/documents/${value}/list`);
        }
    }, [value, category]);

    // タブをクリックした時のハンドラ
    const handleChange = (_e, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar position="absolute">
                <Toolbar sx={{ pl: 5 }}>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        Next App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="main"
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Container fixed sx={{ m: 0, mt: 12 }}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                        >
                            <Tab label="リファレンス" value={"reference"} />
                            <Tab label="記事" value={"posts"} />
                        </Tabs>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <MenuList>
                                <Link href={"/"}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <Dashboard />
                                        </ListItemIcon>
                                        <ListItemText primary="Home" />
                                    </ListItemButton>
                                </Link>
                                <Link href={"/"}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <Add />
                                        </ListItemIcon>
                                        <ListItemText primary="Components" />
                                    </ListItemButton>
                                </Link>
                                <Divider />
                            </MenuList>
                        </Grid>
                        <Grid item xs={10}>
                            {children}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};
