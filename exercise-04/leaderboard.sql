select TOP(10) a.St_id, a.st_name , c.Marks, d.Sub_name
from Student a,Subject d,
	(select Grade.Sub_code, Grade.St_id,Grade.Marks 
    from Grade,(select St_id,max(Marks) as Mark from Grade group by St_id)  as b 
    where Grade.St_id = b.St_id and Grade.Marks = b.Mark) as c
where  a.St_id = c.St_id and d.Sub_code = c.Sub_code  
ORDER BY c.Marks DESC;
