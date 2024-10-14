export class Player {
    private _name = "Stephan";
    private _id: string = "5b06c57c-895a-11ef-992a-abff850f6d56"

    get name(): string {
        return this._name;
    }

    get id(): string {
        return this._id;
    }
}