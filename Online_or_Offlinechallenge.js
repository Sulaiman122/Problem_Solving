let data = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];
let nn = data['username'];
let newData = {
  online: [nn],
  offline: [],
  away: [],
};

let on = data.map((elem) => {
  if (elem.status === "online") newData.online.push(elem.username);
  if (elem.status === "offline") newData.offline.push(elem.username);
  if (elem.lastActivity >= 10 && elem.status === "online")
    newData.away.push(elem.username);
});

console.log(newData);
