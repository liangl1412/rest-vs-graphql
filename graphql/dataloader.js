import DataLoader from 'dataloader';

async function batchUsers(Users, keys) {
    return await Users.find({ _id: { $in: keys } });
}

export const dataloaders = (Users) => ({
    userLoader: new DataLoader((keys) => batchUsers(Users,keys))
});

