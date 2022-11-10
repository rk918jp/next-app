import { MainLayout } from "../../../components/MainLayout";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Skeleton,
    Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import moment from "moment";
import useSwr from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function Home() {
    const router = useRouter();
    const { category } = router.query;

    const { data, error } = useSwr("/api/posts", fetcher);
    const isLoading = !data && !error;

    return (
        <MainLayout>
            {isLoading ? (
                <Skeleton />
            ) : (
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    {data.map((post) => (
                        <Grid item xs={4} key={post.id}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://placehold.jp/150x150.png"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        {post.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Lizards are a widespread group of
                                        squamate reptiles, with over 6,000
                                        species, ranging across all continents
                                        except Antarctica
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mt: 2 }}
                                    >
                                        {/* NOTE: 投稿日時をYYYY/MM/DDで表示する場合 */}
                                        {/*{moment(post.publishedAt).format("YYYY/MM/DD")}*/}
                                        {moment().diff(
                                            post.publishedAt,
                                            "days"
                                        )}
                                        日前
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </MainLayout>
    );
}
