-- @block
create table api_req(
    id INT primary key auto_increment,
    link text,
    filesize int,
    progress int,
    duration decimal(2),
    msg text
);

-- @block
insert into api_req(link,title,filesize,progress,duration,msg)
values(
    "https://mdelta.123tokyo.xyz/get.php/1/50/V-huZdv9ODQ.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=ilZhRgDgeKsm3XxBMEyeww&s=1713079823&n=I%20Like%20Me%20Better%20Mashup%20-%20Sush%20%26%20Yohan%F0%9F%8C%BB%E2%9D%A4%20%E2%80%A2%20Lauv%20%E2%80%A2%20Dildaara%20%C3%97%20Tu%20Hi%20Yaar%20Mera%20%E2%80%A2",
    "I Like Me Better Mashup - Sush & Yohan🌻❤ • Lauv • Dildaara × Tu Hi Yaar Mera •",
    3673465,
    0,
    3.2,
    "success"
)

--@block
select * from api_req

--@block
alter table api_req
add title text

--@block
delete from api_req