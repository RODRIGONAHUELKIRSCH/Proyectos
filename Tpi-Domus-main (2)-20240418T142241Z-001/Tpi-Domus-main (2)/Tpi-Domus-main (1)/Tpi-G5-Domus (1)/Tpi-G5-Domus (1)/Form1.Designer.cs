namespace Tpi_G5_Domus
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.panelizq = new System.Windows.Forms.Panel();
            this.btningreso = new System.Windows.Forms.Button();
            this.lblfrase = new System.Windows.Forms.Label();
            this.lbltittle = new System.Windows.Forms.Label();
            this.panelder = new System.Windows.Forms.Panel();
            this.lblTitulo = new System.Windows.Forms.Label();
            this.tbusuario = new System.Windows.Forms.TextBox();
            this.tbcontraseña = new System.Windows.Forms.TextBox();
            this.btniniciosesion = new System.Windows.Forms.Button();
            this.panelizq.SuspendLayout();
            this.panelder.SuspendLayout();
            this.SuspendLayout();
            // 
            // panelizq
            // 
            this.panelizq.Controls.Add(this.btningreso);
            this.panelizq.Controls.Add(this.lblfrase);
            this.panelizq.Controls.Add(this.lbltittle);
            this.panelizq.Location = new System.Drawing.Point(3, 1);
            this.panelizq.Name = "panelizq";
            this.panelizq.Size = new System.Drawing.Size(383, 449);
            this.panelizq.TabIndex = 0;
            // 
            // btningreso
            // 
            this.btningreso.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(54)))), ((int)(((byte)(85)))), ((int)(((byte)(184)))));
            this.btningreso.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center;
            this.btningreso.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btningreso.ForeColor = System.Drawing.SystemColors.ButtonHighlight;
            this.btningreso.Location = new System.Drawing.Point(257, 215);
            this.btningreso.Name = "btningreso";
            this.btningreso.Size = new System.Drawing.Size(75, 28);
            this.btningreso.TabIndex = 2;
            this.btningreso.Text = "Ingresar";
            this.btningreso.UseVisualStyleBackColor = false;
            this.btningreso.Click += new System.EventHandler(this.btningreso_Click);
            // 
            // lblfrase
            // 
            this.lblfrase.AutoSize = true;
            this.lblfrase.Font = new System.Drawing.Font("Segoe UI", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblfrase.Location = new System.Drawing.Point(40, 168);
            this.lblfrase.Name = "lblfrase";
            this.lblfrase.Size = new System.Drawing.Size(279, 17);
            this.lblfrase.TabIndex = 1;
            this.lblfrase.Text = "Propiedad exclusiva , acesoramiento personal.";
            // 
            // lbltittle
            // 
            this.lbltittle.AutoSize = true;
            this.lbltittle.Font = new System.Drawing.Font("Segoe UI", 27.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lbltittle.Location = new System.Drawing.Point(37, 77);
            this.lbltittle.Name = "lbltittle";
            this.lbltittle.Size = new System.Drawing.Size(139, 50);
            this.lbltittle.TabIndex = 0;
            this.lbltittle.Text = "Domus";
            // 
            // panelder
            // 
            this.panelder.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("panelder.BackgroundImage")));
            this.panelder.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.panelder.Controls.Add(this.btniniciosesion);
            this.panelder.Controls.Add(this.tbcontraseña);
            this.panelder.Controls.Add(this.tbusuario);
            this.panelder.Controls.Add(this.lblTitulo);
            this.panelder.Location = new System.Drawing.Point(392, 1);
            this.panelder.Name = "panelder";
            this.panelder.Size = new System.Drawing.Size(409, 449);
            this.panelder.TabIndex = 1;
            // 
            // lblTitulo
            // 
            this.lblTitulo.AutoSize = true;
            this.lblTitulo.Font = new System.Drawing.Font("Segoe UI", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblTitulo.Location = new System.Drawing.Point(136, 49);
            this.lblTitulo.Name = "lblTitulo";
            this.lblTitulo.RightToLeft = System.Windows.Forms.RightToLeft.No;
            this.lblTitulo.Size = new System.Drawing.Size(165, 32);
            this.lblTitulo.TabIndex = 0;
            this.lblTitulo.Text = "Oficina Virtual";
            this.lblTitulo.Visible = false;
            // 
            // tbusuario
            // 
            this.tbusuario.Location = new System.Drawing.Point(147, 121);
            this.tbusuario.Name = "tbusuario";
            this.tbusuario.PlaceholderText = "Ingrese su usuario";
            this.tbusuario.Size = new System.Drawing.Size(142, 23);
            this.tbusuario.TabIndex = 1;
            this.tbusuario.Visible = false;
            // 
            // tbcontraseña
            // 
            this.tbcontraseña.Location = new System.Drawing.Point(147, 168);
            this.tbcontraseña.Name = "tbcontraseña";
            this.tbcontraseña.PasswordChar = '*';
            this.tbcontraseña.PlaceholderText = "Ingrese su contraseña";
            this.tbcontraseña.Size = new System.Drawing.Size(142, 23);
            this.tbcontraseña.TabIndex = 2;
            this.tbcontraseña.Visible = false;
            // 
            // btniniciosesion
            // 
            this.btniniciosesion.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(54)))), ((int)(((byte)(85)))), ((int)(((byte)(184)))));
            this.btniniciosesion.FlatAppearance.BorderSize = 0;
            this.btniniciosesion.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btniniciosesion.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btniniciosesion.ForeColor = System.Drawing.SystemColors.ButtonHighlight;
            this.btniniciosesion.Location = new System.Drawing.Point(159, 215);
            this.btniniciosesion.Name = "btniniciosesion";
            this.btniniciosesion.Size = new System.Drawing.Size(117, 28);
            this.btniniciosesion.TabIndex = 3;
            this.btniniciosesion.Text = "Iniciar Sesion";
            this.btniniciosesion.UseVisualStyleBackColor = false;
            this.btniniciosesion.Visible = false;
            this.btniniciosesion.Click += new System.EventHandler(this.btniniciosesion_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(238)))), ((int)(((byte)(237)))), ((int)(((byte)(239)))));
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.panelder);
            this.Controls.Add(this.panelizq);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.MaximizeBox = false;
            this.Name = "Form1";
            this.Text = "Domus";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.panelizq.ResumeLayout(false);
            this.panelizq.PerformLayout();
            this.panelder.ResumeLayout(false);
            this.panelder.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private Panel panelizq;
        private Button btningreso;
        private Label lblfrase;
        private Label lbltittle;
        private Panel panelder;
        private Label lblTitulo;
        private Button btniniciosesion;
        private TextBox tbcontraseña;
        private TextBox tbusuario;
    }
}