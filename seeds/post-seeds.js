const { Post } = require("../models");

const postdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    post_contents:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor condimentum lacinia quis vel. Quis lectus nulla at volutpat diam ut venenatis tellus in. Ut sem viverra aliquet eget sit. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Ut tortor pretium viverra suspendisse potenti. Et magnis dis parturient montes. Donec et odio pellentesque diam volutpat commodo sed egestas. Laoreet sit amet cursus sit amet dictum sit. A condimentum vitae sapien pellentesque habitant morbi.",
    user_id: 10,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    post_contents:
      "Adipiscing commodo elit at imperdiet. At tellus at urna condimentum. Vestibulum sed arcu non odio euismod lacinia. Sed pulvinar proin gravida hendrerit. Tellus id interdum velit laoreet id donec. Nec feugiat nisl pretium fusce id velit ut tortor. Nunc scelerisque viverra mauris in aliquam sem. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. In est ante in nibh mauris cursus. Rhoncus aenean vel elit scelerisque mauris.",
    user_id: 8,
  },
  {
    title:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    post_contents:
      "Mauris sit amet massa vitae tortor condimentum lacinia quis. Vitae ultricies leo integer malesuada. Non sodales neque sodales ut etiam. Et odio pellentesque diam volutpat commodo sed. In hendrerit gravida rutrum quisque non. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel.",
    user_id: 1,
  },
  {
    title: "Nunc purus.",
    post_contents:
      "Facilisis leo vel fringilla est ullamcorper. Viverra suspendisse potenti nullam ac tortor. Senectus et netus et malesuada fames. Sit amet risus nullam eget felis eget. Eros in cursus turpis massa tincidunt dui ut ornare lectus. Leo urna molestie at elementum eu facilisis sed odio. Cum sociis natoque penatibus et magnis dis parturient. Adipiscing bibendum est ultricies integer quis auctor elit. Enim ut sem viverra aliquet. Dolor sit amet consectetur adipiscing elit. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Faucibus et molestie ac feugiat sed lectus. Est pellentesque elit ullamcorper dignissim. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Congue quisque egestas diam in arcu cursus euismod quis viverra.",
    user_id: 4,
  },
  {
    title: "Pellentesque eget nunc.",
    post_contents:
      "Enim sit amet venenatis urna cursus eget nunc scelerisque. In mollis nunc sed id semper risus. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Amet est placerat in egestas erat. Orci dapibus ultrices in iaculis nunc sed.",
    user_id: 7,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    post_contents:
      "Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. A pellentesque sit amet porttitor. Cras sed felis eget velit. Nec sagittis aliquam malesuada bibendum arcu vitae. Phasellus vestibulum lorem sed risus ultricies tristique nulla.",
    user_id: 4,
  },
  {
    title: "In hac habitasse platea dictumst.",
    post_contents:
      "Tristique nulla aliquet enim tortor at auctor urna. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Maecenas accumsan lacus vel facilisis volutpat est velit. Vitae congue eu consequat ac. Ultrices tincidunt arcu non sodales neque sodales ut. Auctor neque vitae tempus quam. Faucibus pulvinar elementum integer enim neque volutpat. Dui nunc mattis enim ut tellus elementum sagittis vitae et.",
    user_id: 1,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    post_contents:
      "Pretium aenean pharetra magna ac placerat. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Lectus mauris ultrices eros in cursus turpis. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque.",
    user_id: 1,
  },
  {
    title: "Duis ac nibh.",
    post_contents:
      "Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Id semper risus in hendrerit gravida rutrum quisque non. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Donec enim diam vulputate ut pharetra sit amet aliquam id. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Velit aliquet sagittis id consectetur purus. Eget nunc scelerisque viverra mauris in aliquam.",
    user_id: 9,
  },
  {
    title: "Curabitur at ipsum ac tellus semper interdum.",
    post_contents:
      "Odio ut sem nulla pharetra diam sit amet. Tortor id aliquet lectus proin nibh. Condimentum lacinia quis vel eros donec ac odio tempor orci. Urna condimentum mattis pellentesque id. Nulla aliquet porttitor lacus luctus accumsan. Sed felis eget velit aliquet sagittis id consectetur.",
    user_id: 5,
  },
  {
    title: "In hac habitasse platea dictumst.",
    post_contents:
      "Sem fringilla ut morbi tincidunt augue interdum velit euismod. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. A cras semper auctor neque vitae tempus. Quam viverra orci sagittis eu volutpat odio. Imperdiet dui accumsan sit amet nulla. Tellus in hac habitasse platea dictumst.",
    user_id: 3,
  },
  {
    title: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    post_contents:
      "Facilisis sed odio morbi quis commodo odio aenean sed. Adipiscing elit pellentesque habitant morbi. Lacinia at quis risus sed vulputate odio ut enim blandit. Vel pretium lectus quam id leo in vitae. ",
    user_id: 10,
  },
  {
    title: "Donec dapibus.",
    post_contents:
      "Nullam non nisi est sit amet facilisis magna. Turpis egestas maecenas pharetra convallis posuere morbi leo. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Malesuada fames ac turpis egestas sed tempus urna. Elementum sagittis vitae et leo duis ut diam quam nulla.",
    user_id: 8,
  },
  {
    title: "Nulla tellus.",
    post_contents:
      "Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Orci sagittis eu volutpat odio facilisis mauris.",
    user_id: 3,
  },
  {
    title:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    post_contents:
      "Ultricies tristique nulla aliquet enim tortor at auctor. At in tellus integer feugiat scelerisque varius morbi enim.",
    user_id: 3,
  },
  {
    title:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    post_contents:
      "Faucibus vitae aliquet nec ullamcorper. Nunc faucibus a pellentesque sit amet porttitor eget. Maecenas ultricies mi eget mauris pharetra et ultrices. Amet luctus venenatis lectus magna fringilla urna porttitor. Elit at imperdiet dui accumsan. Et egestas quis ipsum suspendisse ultrices gravida dictum. Egestas tellus rutrum tellus pellentesque. Cursus metus aliquam eleifend mi. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean. ",
    user_id: 7,
  },
  {
    title: "In hac habitasse platea dictumst.",
    post_contents:
      "Cras pulvinar mattis nunc sed blandit libero volutpat. Egestas erat imperdiet sed euismod nisi. Fusce ut placerat orci nulla pellentesque dignissim enim.",
    user_id: 6,
  },
  {
    title: "Etiam justo.",
    post_contents:
      "Sapien eget mi proin sed libero enim sed faucibus. Ac ut consequat semper viverra nam libero. Tempor orci eu lobortis elementum nibh tellus molestie nunc. Bibendum neque egestas congue quisque egestas diam in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit.",
    user_id: 4,
  },
  {
    title: "Nulla ut erat id mauris vulputate elementum.",
    post_contents:
      "Diam in arcu cursus euismod quis viverra. Morbi tincidunt augue interdum velit euismod in pellentesque massa. Ut consequat semper viverra nam libero. Adipiscing vitae proin sagittis nisl. Eget gravida cum sociis natoque penatibus et. Duis tristique sollicitudin nibh sit amet commodo nulla. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
    user_id: 6,
  },
  {
    title:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    post_contents:
      "Eget mi proin sed libero enim sed faucibus turpis in. Consequat interdum varius sit amet mattis vulputate enim. Amet commodo nulla facilisi nullam vehicula. Imperdiet dui accumsan sit amet nulla. Nisl rhoncus mattis rhoncus urna. Sit amet consectetur adipiscing elit duis. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Vel fringilla est ullamcorper eget nulla facilisi etiam. Dictum sit amet justo donec enim diam vulputate ut. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi.",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
