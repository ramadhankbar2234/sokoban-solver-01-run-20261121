import F from"node:fs"
let{MAKEFUN_INPUT_DIR:I,MAKEFUN_OUTPUT_DIR:O}=process.env,W,Z,P,c="udlrUDLR",S,i,n,o,u,z,w,Y,b,A,h,f,j,k,q
S=t=>{W=t.search("\n")+1;Z=[-W,W,-1,1]
let X={},G={},p=0,m=""
for(i in t){i=+i;let v=t[i],k=(i/W>8)*2+(i%W>6);if("$*".includes(v))(X[k]??=[]).push(i);if(".*+".includes(v))(G[k]??=[]).push(i);if("@+".includes(v))p=i}
for(k in X){b=X[k].sort()
A=[...t].map(v=>v=="#"||v=="\n");for(j in X)for(q of(j<k?G:X)[j])if(j!=k)A[q]=1
G[k].sort();let s=[[b,p,""]],V={[[b,p]]:1},v="",R=(x,q,y)=>{P[q]=1;for(let d=4;d--&&!v;){n=q+Z[d];if(A[n]||P[n])continue;o=x.indexOf(n);if(o<0){P[n]=1;R(x,n,y+c[d])}else{u=n+Z[d];if(A[u]||x.includes(u))continue;z=x.slice();z[o]=u;z.sort();w=[z,n];if(V[w])continue;V[w]=1;Y=y+c[d+4];s.push([z,n,Y]);if(z+""==G[k]){p=n;v=Y}}}}
for(h=0;s[h];h++){let[x,q,y]=s[h];P=[];R(x,q,y);if(v)break}
m+=v}
return m}
for(f of F.readdirSync(I))F.mkdirSync(O+"/"+f,{recursive:!0}),F.writeFileSync(O+"/"+f+"/solution.txt",S(F.readFileSync(I+"/"+f+"/level.txt")+""))
