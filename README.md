## React Router-Dom-Tutorial

npm install react-router-dom 

Ümumi səhifə <BrowserRouter> </BrowserRouter> arasında yerləşir...

Route ediləcək hissə <Route path = '/' component={<Component/>}/> 
Link isə <Link to=""> </Link> daxilində yazılır.
Link active classi vermir Bunun ucun NavLinkden istifasde edilr.


Nest and Dinamic route 
    <Route path ="/blog" element={<Blog/>}>
          <Route path="categories"/>
          <Route path="post/:url"/>
          </Route>