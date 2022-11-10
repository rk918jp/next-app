const handler = (req, res) => {
    res.status(200).json([
        { id: 1, title: "post1", publishedAt: new Date() },
        { id: 2, title: "post2", publishedAt: new Date() },
        { id: 3, title: "post3", publishedAt: new Date() },
        { id: 4, title: "post4", publishedAt: new Date() },
        { id: 5, title: "post5", publishedAt: new Date() },
    ]);
};

export default handler;
