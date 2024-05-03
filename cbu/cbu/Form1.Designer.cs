namespace cbu
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            lblcbu = new Label();
            tb1 = new TextBox();
            btncargararchivo = new Button();
            lblbanco = new Label();
            lblsucursal = new Label();
            lblnrover1 = new Label();
            lblnrocuenta = new Label();
            lblnrover2 = new Label();
            btnchekear = new Button();
            btnporlotes = new Button();
            SuspendLayout();
            // 
            // lblcbu
            // 
            lblcbu.AutoSize = true;
            lblcbu.Location = new Point(10, 11);
            lblcbu.Name = "lblcbu";
            lblcbu.Size = new Size(92, 15);
            lblcbu.TabIndex = 0;
            lblcbu.Text = "Ingrese su CBU: ";
            lblcbu.Click += lblcbu_Click;
            // 
            // tb1
            // 
            tb1.Location = new Point(10, 38);
            tb1.Name = "tb1";
            tb1.Size = new Size(159, 23);
            tb1.TabIndex = 1;
            tb1.KeyPress += tb1_KeyPress;
            // 
            // btncargararchivo
            // 
            btncargararchivo.FlatStyle = FlatStyle.Flat;
            btncargararchivo.Location = new Point(214, 2);
            btncargararchivo.Name = "btncargararchivo";
            btncargararchivo.Size = new Size(108, 30);
            btncargararchivo.TabIndex = 2;
            btncargararchivo.Text = "Cargar Archivo";
            btncargararchivo.UseVisualStyleBackColor = true;
            btncargararchivo.Click += btncargararchivo_Click;
            // 
            // lblbanco
            // 
            lblbanco.AutoSize = true;
            lblbanco.Location = new Point(10, 77);
            lblbanco.Name = "lblbanco";
            lblbanco.Size = new Size(46, 15);
            lblbanco.TabIndex = 3;
            lblbanco.Text = "Banco: ";
            lblbanco.Visible = false;
            lblbanco.Click += lblbanco_Click;
            // 
            // lblsucursal
            // 
            lblsucursal.AutoSize = true;
            lblsucursal.Location = new Point(10, 113);
            lblsucursal.Name = "lblsucursal";
            lblsucursal.Size = new Size(57, 15);
            lblsucursal.TabIndex = 4;
            lblsucursal.Text = "Sucursal: ";
            lblsucursal.Visible = false;
            lblsucursal.Click += lblsucursal_Click;
            // 
            // lblnrover1
            // 
            lblnrover1.AutoSize = true;
            lblnrover1.Location = new Point(10, 162);
            lblnrover1.Name = "lblnrover1";
            lblnrover1.Size = new Size(65, 15);
            lblnrover1.TabIndex = 5;
            lblnrover1.Text = "Nro verif1: ";
            lblnrover1.Visible = false;
            lblnrover1.Click += lblnrover1_Click;
            // 
            // lblnrocuenta
            // 
            lblnrocuenta.AutoSize = true;
            lblnrocuenta.Location = new Point(10, 205);
            lblnrocuenta.Name = "lblnrocuenta";
            lblnrocuenta.Size = new Size(72, 15);
            lblnrocuenta.TabIndex = 6;
            lblnrocuenta.Text = "Nro cuenta: ";
            lblnrocuenta.Visible = false;
            lblnrocuenta.Click += lblnrocuenta_Click;
            // 
            // lblnrover2
            // 
            lblnrover2.AutoSize = true;
            lblnrover2.Location = new Point(10, 246);
            lblnrover2.Name = "lblnrover2";
            lblnrover2.Size = new Size(65, 15);
            lblnrover2.TabIndex = 7;
            lblnrover2.Text = "Nro verif2: ";
            lblnrover2.Visible = false;
            lblnrover2.Click += lblnrover2_Click;
            // 
            // btnchekear
            // 
            btnchekear.FlatStyle = FlatStyle.Flat;
            btnchekear.Font = new Font("Segoe UI", 8.25F, FontStyle.Regular, GraphicsUnit.Point);
            btnchekear.Location = new Point(175, 38);
            btnchekear.Name = "btnchekear";
            btnchekear.Size = new Size(69, 23);
            btnchekear.TabIndex = 8;
            btnchekear.Text = "Completo";
            btnchekear.UseVisualStyleBackColor = true;
            btnchekear.Click += btnchekear_Click;
            // 
            // btnporlotes
            // 
            btnporlotes.FlatStyle = FlatStyle.Flat;
            btnporlotes.Font = new Font("Segoe UI", 8.25F, FontStyle.Regular, GraphicsUnit.Point);
            btnporlotes.Location = new Point(253, 38);
            btnporlotes.Name = "btnporlotes";
            btnporlotes.Size = new Size(69, 23);
            btnporlotes.TabIndex = 9;
            btnporlotes.Text = "Por lotes";
            btnporlotes.UseVisualStyleBackColor = true;
            btnporlotes.Click += btnporlotes_Click;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(325, 280);
            Controls.Add(btnporlotes);
            Controls.Add(btnchekear);
            Controls.Add(lblnrover2);
            Controls.Add(lblnrocuenta);
            Controls.Add(lblnrover1);
            Controls.Add(lblsucursal);
            Controls.Add(lblbanco);
            Controls.Add(btncargararchivo);
            Controls.Add(tb1);
            Controls.Add(lblcbu);
            Name = "Form1";
            Text = "Clave Cbu";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label lblcbu;
        private TextBox tb1;
        private Button btncargararchivo;
        private Label lblbanco;
        private Label lblsucursal;
        private Label lblnrover1;
        private Label lblnrocuenta;
        private Label lblnrover2;
        private Button btnchekear;
        private Button btnporlotes;
    }
}