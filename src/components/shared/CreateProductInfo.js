import React, {useState} from "react";
import {Card, CardContent, MenuItem, Select, TextField} from "@material-ui/core";

const CreateProductInfo = () => {

    const [product, setProduct] = useState({status: "IN_STOCK"});
    const [error, setError] = useState({});

    const {name, status, summary, price} = product;

    const handleChange = (event) => {
        setProduct({...product, [event.target.name]: event.target.value});
    }


    return (
        <Card elevation={0} raised={false} variant="outlined">
            <CardContent>
                <div className="margin-vertical-small">
                    <TextField
                        required={true}
                        name="name"
                        fullWidth={true}
                        type="text"
                        margin="dense"
                        onChange={handleChange}
                        helperText={error.name}
                        label="Product Name"
                        placeholder="Enter product name"
                        error={error.name}
                        value={name}
                        variant="outlined"
                    />
                </div>

                <div className="margin-vertical-small">
                    <TextField
                        required={true}
                        name="price"
                        fullWidth={true}
                        type="number"
                        margin="dense"
                        onChange={handleChange}
                        helperText={error.price}
                        label="Product Price"
                        placeholder="Enter product price"
                        error={error.price}
                        value={price}
                        variant="outlined"
                    />
                </div>

                <div className="margin-vertical-small">
                    <TextField
                        required={true}
                        name="summary"
                        fullWidth={true}
                        type="text"
                        margin="dense"
                        onChange={handleChange}
                        helperText={error.summary}
                        label="Description"
                        multiline={true}
                        rows={5}
                        placeholder="Enter product description"
                        error={error.summary}
                        value={summary}
                        variant="outlined"
                    />
                </div>

                <div className="margin-vertical-small">
                    <Select variant="outlined" fullWidth={true} margin="dense" defaultValue="CASUAL"
                            onChange={handleChange} name="status" value={status}>
                        <MenuItem value="IN_STOCK">In Stock</MenuItem>
                        <MenuItem value="OUT_OF_STOCK">Out of Stock</MenuItem>
                        <MenuItem value="COMING_SOON">Coming Soon</MenuItem>
                    </Select>
                </div>
            </CardContent>
        </Card>
    )
}

export default CreateProductInfo;
