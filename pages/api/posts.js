const handler = (req, res) => {
    res.status(200).json([
        {
            id: "post1",
            title: "ポスト1",
        },
    ]);
};

export default handler;
