import { MainLayout } from "../../../components/MainLayout";
import { Card, Paper } from "@mui/material";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    const { category } = router.query;

    // const [data] = useSwr();
    // APIで取得したデータの想定
    const posts = [
        { id: 1, title: "post1" },
        { id: 2, title: "post2" },
        { id: 3, title: "post3" },
        { id: 4, title: "post4" },
        { id: 5, title: "post5" },
    ];

    return (
        <MainLayout>
            <Paper>
                {/* categoryによって出し分けるサンプル */}
                {category === "reference"
                    ? "リファレンス"
                    : category === "posts"
                    ? "ポスト"
                    : undefined}

                {posts.map((post) => (
                    <PostCard post={post} key={post.id} />
                ))}
            </Paper>
        </MainLayout>
    );
}

const PostCard = ({ post }) => {
    return <Card>{post.title}</Card>;
};
