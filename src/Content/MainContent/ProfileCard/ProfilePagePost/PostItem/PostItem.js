


const PostItem = function(props) {
    console.log(props.mainProfile.posts[0])


    let post = props.mainProfile.posts.map((post)=> {
        return (
            <div key={post.id}>
                <div>{post.name}</div>
                <div>{post.post}</div>
            </div>
        )
    })


    return (
        
        <div>{post}</div>
    )
}


export default PostItem;