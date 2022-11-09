const handler = (req, res) => {
    res.status(200).json([
        {
            label: "カテゴリ1",
            id: "cat1",
            children: [
                {
                    label: "カテゴリ1-1",
                    id: "cat1_1",
                },
                {
                    label: "カテゴリ1-2",
                    id: "cat1_2",
                },
                {
                    label: "カテゴリ1-3",
                    id: "cat1_3",
                },
            ],
        },
        {
            label: "カテゴリ2",
            id: "cat2",
            children: [
                {
                    label: "カテゴリ2-1",
                    id: "cat2_1",
                },
                {
                    label: "カテゴリ2-2",
                    id: "cat2_2",
                },
                {
                    label: "カテゴリ2-3",
                    id: "cat2_3",
                },
            ],
        },
    ]);
};

export default handler;
