<script type="text/javascript" src="modules/products/view/js/validate.js" ></script>
<div class="row">
    <div class="col-lg-8 col-md-8 col-sm-8">
        <div class="contact_form wow fadeInLeft">
            <form class="submitphoto_form" id="form_products" method="post">

                <fieldset>
                    <!-- Form Name -->
                    <legend>New Product</legend>

                    <!-- Serial Number -->
                    <label  for="serial_number" class="col-md-4 control-label">Serial_name</label>
                    <input id="serial_number" name="serial_number" type="text"  placeholder="Input serial number" class="form-control input-md"  value="<?php
                        if (!isset($error['serial_number'])) {
                            echo $_POST ? $_POST['serial_number'] : "";
                        }
                        ?>" >
                        <div id="e_serial_number">
                        <?php
                            if (isset($error['serial_number'])) {
                                print ("<BR><span style='color: #ff0000'>" . "* " . $error['serial_number'] . "</span><br/>");
                            }
                            ?></div>

                    <br>
                    <!-- Select Basic -->
                    <label  for="category" class="col-md-4 control-label">Tipo</label>
                    <select id="category" name="category" class="form-control input-md">
                        <option value="Photovoltaic">Photovoltaic</option>
                        <option value="Off-grid">Off-grid</option>
                        <option value="Estructure">Estructure</option>
                        <option value="Elecectricity">Electricity</option>
                    </select>
                    <br>

                    <!-- Select Basic -->
                    <label  for="trademark" class="col-md-4 control-label">Marca</label>
                    <select id="trademark" name="trademark" class="form-control input-md">
                        <option value="Sunways">Sunways</option>
                        <option value="Solarmax">Solarmax</option>
                        <option value="Kaco">Kaco</option>
                        <option value="Victron">Victron</option>
                        <option value="Sma">Sma</option>
                        <option value="Outblack">OutBlack</option>
                        <option value="Eixide">Eixide</option>
                    </select>
                    <br>

                    <!-- Select Basic -->
                    <label  for="model" class="col-md-4 control-label">Modelo</label>
                    <select id="model" name="model" class="form-control input-md" >
                        <option value="3000/24v">3000w/24v</option>
                        <option value="NT6000">NT6000</option>
                        <option value="NT4000">NT4000</option>
                        <option value="NT2500">NT2500</option>
                        <option value="C2500">C2500</option>
                        <option value="C3500">C3500</option>
                        <option value="C5000">C5000</option>
                    </select>
                    <br>

                    <!-- Datepicker-->
                    <label class="col-md-4 control-label" for="date_entry">Date entry</label>

                    <input id="date_entry" type="text" name="date_entry" class="form-control input-md" value="<?php
                        if (!isset($error['date_entry'])) {
                            echo $_POST ? $_POST['date_entry'] : "";
                        }
                        ?>" >
                        <div id="e_date_entry">
                        <?php
                            if (isset($error['date_entry'])) {
                                print ("<BR><span style='color: #ff0000'>" . "* " . $error['date_entry'] . "</span><br/>");
                            }
                            ?></div>

                    <br>

                    <!-- Text input-->
                    <label class="col-md-4 control-label" for="Fecha salida">Date exit</label>
                    <!--<input id="Fecha salida" name="Fecha salida" type="text" placeholder="Fecha salida" class="form-control input-md">-->
                    <input id="date_exit" type="text" name="date_exit" class="form-control input-md" value="<?php
                        if (!isset($error['date_exit'])) {
                            echo $_POST ? $_POST['date_exit'] : "";
                        }
                        ?>" >
                        <div id="e_date_exit">
                        <?php
                            if (isset($error['date_exit'])) {
                                print ("<BR><span style='color: #ff0000'>" . "* " . $error['date_exit'] . "</span><br/>");
                            }
                            ?></div>

                    <br>

                    <!-- Text input-->
                    <label class="col-md-4 control-label" for="purchase_price">Purchase price</label>
                    <input id="purchase_price" name="purchase_price" type="text" placeholder="Purchase price" class="form-control input-md" value="<?php
                        if (!isset($error['purchase_price'])) {
                            echo $_POST ? $_POST['purchase_price'] : "";
                        }
                        ?>" >
                        <div id="e_purchase_price">
                        <?php
                            if (isset($error['purchase_price'])) {
                                print ("<BR><span style='color: #ff0000'>" . "* " . $error['purchase_price'] . "</span><br/>");
                            }
                            ?></div>


                    <br>

                    <!-- Text input-->
                    <label class="col-md-4 control-label" for="sale_price">Sale price</label>
                    <input id="sale_price" name="sale_price" type="text" placeholder="sale_price" class="form-control input-md" value="<?php
                        if (!isset($error['sale_price'])) {
                            echo $_POST ? $_POST['sale_price'] : "";
                        }
                        ?>" >
                        <div id="e_sale_price">
                        <?php
                            if (isset($error['sale_price'])) {
                                print ("<BR><span style='color: #ff0000'>" . "* " . $error['sale_price'] . "</span><br/>");
                            }
                            ?></div>
                    <br>

                    <!-- Text input-->
                    <label class="col-md-4 control-label" for="provider">Provider</label>
                    <input id="provider" name="provider" type="text" placeholder="provider" class="form-control input-md" value="<?php
                        if (!isset($error['provider'])) {
                            echo $_POST ? $_POST['provider'] : "";
                        }
                        ?>" >
                        <div id="e_provider">
                        <?php
                            if (isset($error['provider'])) {
                                print ("<BR><span style='color: #ff0000'>" . "* " . $error['provider'] . "</span><br/>");
                            }
                            ?></div>
                    <br>

                    <!-- Text input-->

                    <label class="col-md-4 control-label" for="weight">Weight</label>
                    <input id="weight" name="weight" type="text" placeholder="weight" class="form-control input-md" value="<?php
                        if (!isset($error['weight'])) {
                            echo $_POST ? $_POST['weight'] : "";
                        }
                        ?>" >
                        <div id="e_weight">
                        <?php
                            if (isset($error['weight'])) {
                                print ("<BR><span style='color: #ff0000'>" . "* " . $error['weight'] . "</span><br/>");
                            }
                            ?></div>
                   <br>

                    <!-- Text input-->
                    <label class="col-md-4 control-label" for="height">Height</label>
                    <input id="height" name="height" type="text" placeholder="height" class="form-control input-md" value="<?php
                        if (!isset($error['height'])) {
                            echo $_POST ? $_POST['height'] : "";
                        }
                        ?>" >
                        <div id="e_height">
                        <?php
                            if (isset($error['height'])) {
                                print ("<BR><span style='color: #ff0000'>" . "* " . $error['height'] . "</span><br/>");
                            }
                            ?></div>
                    <br>

                    <!-- Text input-->
                    <label class="col-md-4 control-label" for="width">Width</label>
                    <input id="width" name="width" type="text" placeholder="Width" class="form-control input-md" value="<?php
                        if (!isset($error['width'])) {
                            echo $_POST ? $_POST['width'] : "";
                        }
                        ?>" >
                        <div id="e_width">
                        <?php
                            if (isset($error['width'])) {
                                print ("<BR><span style='color: #ff0000'>" . "* " . $error['width'] . "</span><br/>");
                            }
                            ?></div>
                    <br>

                    <!-- Textarea -->
                    <label class="col-md-4 control-label" for="description">Description</label>
                    <textarea  id="description" name="description" placeholder="Describe your product here..." rows="4"  class="form-control" value="<?php
                        if (!isset($error['description'])) {
                            echo $_POST ? $_POST['description'] : "";
                        }
                        ?>"></textarea>

                    <div id="e_description">
                    <?php
                        if (isset($error['description'])) {
                            print ("<BR><span style='color: #ff0000'>" . "* " . $error['description'] . "</span><br/>");
                        }
                        ?></div>
                    <br>

                    <!-- Multiple Radios -->
                    <label class="col-md-4 control-label" for="status">Status</label>
                    <br>
                    <div class="radio">
                        <label for="Estado-0">
                            <input type="radio" name="status" id="status-1" value="New" <?php if($_POST['status']==="New") echo "checked=checked"; ?>>
                            New
                        </label>
                    </div>
                    <div class="radio">
                        <label for="Estado-1">
                            <input type="radio" name="status" id="status-2" value="Second hand" <?php if($_POST['status']==="Second hand") echo "checked=checked"; ?>>
                            Second hand
                        </label>
                    </div>
                    <div class="radio">
                        <label for="Estado-2">
                            <input type="radio" name="status" id="status-3" value="Repaired" <?php if($_POST['status']==="Repaired") echo "checked=checked"; ?>>
                            Repaired
                        </label>

                    </div>
                    <br>

                    <!-- Multiple Checkboxes -->
                    <label class="col-md-4 control-label" for="warranty">Warranty</label>
                    <?php
                    $war=explode(":", $_POST['warranty']);
                     ?>
                    <br>
                    <div class="checkbox">
                        <label for="Garantia-0">
                          <?php
                        $check_array=in_array("Any", $war);
                        if($check_array){
                         ?>
                              <input type="checkbox" name="warranty[]"  value="Any" checked/>
                              <?php

                        }else{

                    ?>
                          <input type="checkbox" name="warranty[]"  value="Any" />
                    <?php
                        }
                    ?>
                              Any
                        </label>
                    </div>
                    <div class="checkbox">
                        <label for="Garantia-1">
                          <?php
                        $check_array=in_array("6 months", $war);
                        if($check_array){
                         ?>
                              <input type="checkbox" name="warranty[]"  value="6 months" checked/>
                              <?php

                        }else{

                          ?>
                            <input type="checkbox" name="warranty[]"  value="6 months">
                            <?php
                                }
                            ?>
                            6 months
                        </label>
                    </div>
                    <div class="checkbox">
                        <label for="Garantia-2">
                          <?php
                        $check_array=in_array("1 year", $war);
                        if($check_array){
                         ?>
                              <input type="checkbox" name="warranty[]"  value="1 year" checked/>
                              <?php

                        }else{

                          ?>
                            <input type="checkbox" name="warranty[]"  value="1 year">
                            <?php
                                }
                            ?>
                            1 year
                        </label>
                    </div>
                    <div class="checkbox">
                        <label for="Garantia-3">
                          <?php
                        $check_array=in_array("5 years", $war);
                        if($check_array){
                         ?>
                              <input type="checkbox" name="warranty[]"  value="5 years" checked/>
                              <?php

                        }else{

                          ?>
                            <input type="checkbox" name="warranty[]"  value="5 years">
                            <?php
                                }
                            ?>
                            5 years
                        </label>
                    </div>
                    <div class="checkbox">
                        <label for="Garantia-4">
                          <?php
                        $check_array=in_array("8 years", $war);
                        if($check_array){
                         ?>
                              <input type="checkbox" name="warranty[]"  value="8 years" checked/>
                              <?php

                        }else{

                          ?>
                            <input type="checkbox" name="warranty[]"  value="8 years">
                            <?php
                                }
                            ?>
                            8 years
                        </label>

                    </div>
                    <div id="e_warranty"><?php
                            if (isset($error['warranty'])) {
                                print ("<BR><span style='color: #ff0000'>" . "* " . $error['warranty'] . "</span><br/>");
                            }
                            ?></div>
                    <br>
                    <!-- Button (Double) -->
                    <div class="form-group">

                        <button type="button" id="submit_products" name="submit_products" value="submit" class="btn btn-info">Submit</button>
                        <button id="Cancelar" name="Cancelar" class="btn btn-warning">Cancel</button>

                    </div>

                </fieldset>
            </form>
        </div>
    </div>
